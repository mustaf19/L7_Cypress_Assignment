import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import TextEditor_PO from "../pageObjectsforAssignment/TextEditor_PO";

Given('A iframe embedded text editor', () => {
  cy.visit(Cypress.env('iframeTestSite_URL'));
})

When('A user do {string}, do {string} and edit {string}', (bold,italic,text) => {
    TextEditor_PO.clearText()
    TextEditor_PO.addText(text)
    TextEditor_PO.boldText(bold)
    TextEditor_PO.italicText(italic)
})
Then('The text is changed as per the user {string},{string} and {string}', (text,bold,italic) => {
    TextEditor_PO.checkForText(text)
    TextEditor_PO.checkForBold(text,bold)
    TextEditor_PO.checkForItalic(text,italic)
})