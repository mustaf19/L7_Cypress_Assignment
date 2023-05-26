import TextEditor_PO from "../pageObjectsforAssignment/TextEditor_PO";

describe('Text editor Test',()=>{
    let data
    before(()=>{
        cy.fixture('example').then((fixtureData)=>{
           data=fixtureData
        })
     })
    it('Check if there is infinite Scroll',()=>{
        cy.visit(Cypress.env('iframeTestSite_URL'))
        TextEditor_PO.clearText()
        TextEditor_PO.addText(data.textInput)
        TextEditor_PO.boldText(data.isBold)
        TextEditor_PO.italicText(data.isItalic)
        TextEditor_PO.checkForText(data.textInput)
        TextEditor_PO.checkForBold(data.textInput,data.isBold)
        TextEditor_PO.checkForItalic(data.textInput,data.isItalic)
    })
})

