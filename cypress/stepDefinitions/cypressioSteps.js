import {Given, Then} from '@badeball/cypress-cucumber-preprocessor';
import Cypressio_PO from "../pageObjectsforAssignment/Cypressio_PO";
import EndToEnd_PO from '../pageObjectsforAssignment/EndToEnd_PO';
import DocsViewport_PO from '../pageObjectsforAssignment/DocsViewport_PO';

let data
before(()=>{
    cy.fixture('example').then((fixtureData)=>{
        data=fixtureData
    })
})

// Scenario('Validate Menu items and click on docs link', () => {
Given('User is on main Cypressio site homepage',() => {
    cy.visit(Cypress.env('cypressio_URL'))
    
});
Then('validate the menu items',() => {
    Cypressio_PO.validateMenuItems()
    
});
Then('Hover over docs',() => {
    Cypressio_PO.hoverOverDocs()
});
Then('click on provided text',() => {
    Cypressio_PO.clickOnText(data.clickText_Cypressio_PO)
});

// });


// Scenario('Search for the given text on E2E test page', () => {
Given('User is on E2E main page',() => {
    cy.visit(Cypress.env('endToEndTest_URL')) 
});
Then('validate url contains the given text',() => {
    EndToEnd_PO.validateUrlContains(data.urlContains1_EndToEnd_PO,data.urlContains2_EndToEnd_PO)
    
});
Then('verify page title',() => {
    EndToEnd_PO.verifyPageTitle(data.title_EndToEnd_PO)
});
Then('Search for the provided text',() => {
    EndToEnd_PO.searchFor(data.search_EndToEnd_PO)
});
// });
// Scenario('Validation of Viewport docs', () => {
Given('Viewport home page',() => {
    cy.visit('https://docs.cypress.io/api/commands/viewport#Yields-Icon-namequestion-circle')
    
});
Then('validate header contains this text',() => {
    DocsViewport_PO.validateHeader(data.header_DocsViewport_PO)
    
});
Then('validate the page contains a particular text',() => {
    DocsViewport_PO.validateText(data.text_DocsViewport_PO)
});
// });