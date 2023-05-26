const fs = require('fs');
const archiver = require('archiver');
const dayjs = require('dayjs');
const fsExtra = require('fs-extra');

// const month = ['months','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
// const srcList = ['./cypress/videos/', './cypress/screenshots', './cypress/resultsMerged/'];
const srcList = ['./cypress/videos/', './cypress/screenshots', './cypress/results/'];
const destList = ['videos', 'screenshots', 'results'];
const date = dayjs().format('DD-MM-YYYY_HH.MM.ss');
const dest = `./_TempReport/${date}/`;

async function copyFiles() {
  try {
    for (let i = 0; i < srcList.length; i++) {
      await fsExtra.copy(srcList[i], dest + destList[i]);
      console.log(`File successfully moved: ${srcList[i]} to ${dest + destList[i]}`);
    }
  } catch (err) {
    console.error('Error occurred during file copy:', err);
  }
}

async function createArchive() {
  return new Promise((resolve, reject) => {
    const output = fs.createWriteStream(__dirname + `/cypress/ReportsArchives/${date}.zip`);
    output.on('close', function () {
      console.log('Archive created:', archive.pointer() + ' total bytes');
      console.log('Archiver has been finalized and the output file descriptor has closed.');
      resolve();
    });
    output.on('end', function () {
      console.log('Data has been drained');
    });

    const archive = archiver('zip', {
      zlib: { level: 9 }
    });
    archive.on('warning', function (err) {
      if (err.code === 'ENOENT') {
        console.warn('Archive warning:', err);
      } else {
        reject(err);
      }
    });
    archive.on('error', function (err) {
      reject(err);
    });
    archive.pipe(output);
    archive.directory(`${dest}`, false);
    archive.finalize();
  });
}

async function deleteDirectories() {
  try {
    for (let i = 0; i < srcList.length; i++) {
      await fsExtra.remove(srcList[i]);
      console.log('Directory deleted successfully:', srcList[i]);
    }
  } catch (err) {
    console.error('Error occurred during directory deletion:', err);
  }

  // try{
  //   await fsExtra.remove(`./_TempReport/`);
  //   console.log("Deleted _TempReport");
  // }
  // catch(err){
  //   console.error('Error occurred during directory deletion:', err)
  // }
}

async function run() {
  try {
    console.log('Copying files...');
    await copyFiles();

    console.log('Creating archive...');
    await createArchive();

    console.log('Deleting directories...');
    await deleteDirectories();

    console.log('Process completed successfully.');
  } catch (err) {
    console.error('An error occurred:', err);
  }
}

run();