const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsBuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  env:{
    baseUrl : 'https://www.w3schools.com/',
    jsE2Eurl: 'https://www.cypress.io/',
    espUrl: 'http://the-internet.herokuapp.com/infinite_scroll',
    w3schools_URL : 'https://www.w3schools.com/',
    cypressio_URL: 'https://www.cypress.io/',
    viewport_URL: 'https://docs.cypress.io/api/commands/viewport#Yields-Icon-namequestion-circle',
    endToEndTest_URL: 'https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test',
    infiniteScrollSite_URL: 'http://the-internet.herokuapp.com/infinite_scroll',
    iframeTestSite_URL: 'http://the-internet.herokuapp.com/iframe',
    dragAndDropSite_URL:'http://the-internet.herokuapp.com/drag_and_drop',
    numOfDivs: 1
  },
  
  e2e: {
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      // require('cypress-mochawesome-reporter/plugin')(on);
      const bundler = createBundler({
        plugins: [createEsBuildPlugin(config)],
      });
      on('file:preprocessor', bundler);
      await addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    specPattern: ['cypress/e2e/features/*.feature','cypress/e2e/*.cy.js']
  },
  reporter: "mochawesome",
  reporterOptions:{
    reportDir: './cypress/results/',
    reportFilename:"[name]_[status]_report",
    overwrite: false,
    html: false,
    json: true
  }
});