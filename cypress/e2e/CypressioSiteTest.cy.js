const { docsTab, subMenu,  navBarElements}  = require("../pageElements/CypressioPageElements")
const Cypressio_PO = require("../pageObjectsforAssignment/Cypressio_PO")
const DocsViewport_PO = require("../pageObjectsforAssignment/DocsViewport_PO")
const EndToEnd_PO = require("../pageObjectsforAssignment/EndToEnd_PO")



describe('Cypressio Site Test',()=>{
    let data
    before(()=>{
        cy.fixture('example').then((fixtureData)=>{
           data=fixtureData
        })
     })


    it('test scenario on Cypressio Page',()=>{
        cy.visit(Cypress.env('cypressio_URL'))
        Cypressio_PO.validateMenuItems()
        Cypressio_PO.hoverOverDocs()
        Cypressio_PO.clickOnText(data.clickText_Cypressio_PO)
        
    })
    
    it('test scenario on End to End Testing Page',()=>{
        cy.visit(Cypress.env('endToEndTest_URL'))
        EndToEnd_PO.validateUrlContains(data.urlContains1_EndToEnd_PO,data.urlContains2_EndToEnd_PO)
        EndToEnd_PO.verifyPageTitle(data.title_EndToEnd_PO)
        EndToEnd_PO.searchFor(data.search_EndToEnd_PO)
        
        
    })
    
    it('test scenario in Viewport Docs',()=>{
        cy.visit(Cypress.env('viewport_URL'))
        DocsViewport_PO.validateHeader(data.header_DocsViewport_PO)
        DocsViewport_PO.validateText(data.text_DocsViewport_PO)
    })
})