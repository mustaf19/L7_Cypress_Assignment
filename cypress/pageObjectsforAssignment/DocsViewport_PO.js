const { viewportHeader } = require("../pageElements/DocsViewportPageElements")

class DocsViewport_PO{
    validateHeader=(input)=>{
        cy.get(viewportHeader).then(x=>{
            expect(x.text().toLowerCase()).to.include(input.toLowerCase())
        })
    }
    
    validateText=(input)=>{
        cy.get('body').contains(input)
    }
}

module.exports = new DocsViewport_PO()



// cy.matchHeader(x,input)
// expect(x.text().toLowerCase().trim()).to.equal(input.toLowerCase().trim())