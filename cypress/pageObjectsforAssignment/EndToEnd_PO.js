const { searchBar, searchButtonKeys, searchPopUp, searchInputField, searchResults } = require("../pageElements/EndToEndTestingPageElements")

class EndToEnd_PO{
    validateUrlContains=(...input)=>{
        cy.url().should('contains',input[0]).and('include',input[1])
        
    }
    
    verifyPageTitle = (input) => {
        cy.wait(3000)
        cy.matchTitle(input)  //custom cmd
    }
    
    searchFor = (input) => {
        cy.wait(10000)
        cy.get(searchBar).click()
        cy.get(searchInputField).should('be.visible')
        cy.get(searchInputField).type(input, { delay: 100 })
        cy.get(searchResults).first().click()
    }
}

module.exports = new EndToEnd_PO()




// cy.title().then(x=>{
//     expect(x.toLowerCase()).to.include(input.toLowerCase())
// })