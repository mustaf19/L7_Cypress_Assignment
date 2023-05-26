import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import InfiniteScroll_PO from "../pageObjectsforAssignment/InfiniteScroll_PO";

Given('A infinite scrollable site', () => {
  cy.visit(Cypress.env('infiniteScrollSite_URL'));
})

When('I scroll down randomly', () => {
  InfiniteScroll_PO.scrollDownRandomly()
})
Then('More elements are loaded', () => {
  InfiniteScroll_PO.checkMoreElementLoaded()
})