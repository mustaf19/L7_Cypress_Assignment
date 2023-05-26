import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import DragAndDrop_PO from "../pageObjectsforAssignment/DragAndDrop_PO";

Given('A drag and drop test site', () => {
  cy.visit(Cypress.env('dragAndDropSite_URL'));
})

When('A user drags a box and Drops over another', () => {
  DragAndDrop_PO.dragAndDrop()
})

Then('It gets dragged and dropped', () => {
  DragAndDrop_PO.checkForDragAndDrop()
})