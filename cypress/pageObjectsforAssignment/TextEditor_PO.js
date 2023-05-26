const { boldButton, italicButton } = require("../pageElements/TestEditorElements")

class TextEditor_PO{
    
    clearText(){
        cy.selectIframe().clear()
    }
    
    addText(input){
        cy.selectIframe().type(input)
    }
    
    boldText(makeBold){
        if(makeBold){
            
            cy.selectIframe()
            .type('{selectAll}')
            .then(x=>{
                cy.get(boldButton).click()
                cy.wait(1000)
            }) 
        }
    }
    
    
    italicText(makeItalic){
        if(makeItalic){
            cy.selectIframe()
            .type('{selectAll}')
            .then(x=>{
                cy.get(italicButton).click()
            }) 
            
        }
    }
    
    checkForBold(text,boldOrNot){
        cy.selectIframe()
        .contains(text)
        .then(x=>{
            const tmp = window.getComputedStyle(x[0]).getPropertyValue('font-weight')
            if(/[0-9]/.test(tmp)){
                if(boldOrNot){
                    expect(tmp).to.equal('700')
                }
                else{
                    expect(tmp).not.to.equal('700')
                }
            }
            else if(/[a-z]/.test(tmp)){
                if(boldOrNot){
                    expect(tmp).to.equal('bold')
                }
                else{
                    expect(tmp).not.to.equal('bold')
                }
            }
        })
        
    }
    
    checkForItalic(text,italicOrNot){
        cy.selectIframe()
        .contains(text)
        .then(x=>{
            if(italicOrNot){
                cy.get(x).invoke('css','font-style').should('eq','italic')
            }
            else{
                cy.get(x).invoke('css','font-style').should('not.eq','italic')
            }
        })
        
        
    }
    
    checkForText(input){
        cy.selectIframe()
        .contains(input)
        .then(x=>{
            expect(x.text()).to.equal(input)
        })


    }
}


module.exports = new TextEditor_PO()
// checkForEdit(input){
//     cy.selectIframe()
//     .contains(input)
//     .then(x=>{
//         cy.get(x).should('have.text',input)
//         cy.get(x).invoke('css','font-style').should('eq','italic')
//         const tmp = window.getComputedStyle(x[0]).getPropertyValue('font-weight')
//         cy.log(tmp)
//         if(typeof(tmp) == 'string'){
//             if(/[0-9]/.test(tmp)){
//                 if(Number(tmp)>=400){
//                     expect(tmp).to.equal('700')
//                 }
//             }
//         }
//     })
// }