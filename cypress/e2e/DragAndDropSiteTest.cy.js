import DragAndDrop_PO from "../pageObjectsforAssignment/DragAndDrop_PO";

describe('drag and drop Test',()=>{
    
    it('drag and drop',()=>{
        cy.visit(Cypress.env('dragAndDropSite_URL'))
        DragAndDrop_PO.dragAndDrop()
        DragAndDrop_PO.checkForDragAndDrop()
    })
})





















// it.only('text format assertion',()=>{
//     cy.visit(Cypress.env('iframeTestSite_URL'))
//     cy.get('#tinymce > p').then(x=>{
//         cy.log(x.text())
//     })
// })



// cy.get('iframe')
// .its('0.contentDocument.body')
// .then(cy.wrap)
// .find('p')
// .should('be','visible')
// // .then(x=>{
    // //     cy.log(cy.get(x).text())
    // // })
    // // .then(x=>{
        // //     const fontWeight = cy.get(x).invoke('css','font-weight')
        // //     cy.log("sdv",fontWeight)
        // //     // expect(cy.get(x).invoke('css','font-weight')).to.equal('bold')
        // // })
        // // .invoke('val')
        // .then(text=>{
            //     const fontWeight = Cypress.$('<p>').html(text).css('font-weight') // Get the font-weight CSS property of the text
//     expect(fontWeight).to.equal('bold') //
// })
// // .invoke('css', 'font-weight') // Get the font-weight CSS property of the element
// // .should('equal', 'bold') 



// cy.get(x).should('have.text',"New text")
// cy.get(x).invoke('css','font-style').should('eq','italics')