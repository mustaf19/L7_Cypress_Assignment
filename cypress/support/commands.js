// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('clickLink',{ prevSubject: true}, (element) => {
  cy.get(element).invoke('removeAttr','target').click()
  // element.invoke('removeAttr','target').click()
})

Cypress.Commands.add('matchTitle', (element,input) => {
  cy.title().then(x=>{
    expect(x.toLowerCase()).to.include(input.toLowerCase())
  })
})


Cypress.Commands.add('matchHeader', (element,input) => {
  cy.get(element).then(x=>{
    expect(x.toLowerCase()).to.include(input.toLowerCase())
  })
})


// Cypress.Commands.add('checkForDragAndDrop', (element,input) => {
//   cy.get(element).then(x=>{
//     expect(x).to.equal(input)
//   })
// })
Cypress.Commands.add('dragDoneOrNot', (element1,element2) => {
  cy.get(element1).then(x=>{
    cy.log(x)
    const bx1Before = x
    cy.get(element2).should('eq',bx1Before)
  })
})
Cypress.Commands.add('wrapContent', (element,underAlias) => {
  cy.get(element).invoke('text').then(x=> {
    cy.wrap(x).as(underAlias)
  })
})
// Cypress.Commands.add('wrapContent', (element,underAlias,con) => {
//   return cy.get(element).invoke('text').then(x=> {
//     cy.wrap(x).as(underAlias)
//     con = x
//   })
// })

Cypress.Commands.add('selectIframe', (element) => {
  cy.get('iframe')
  .its('0.contentDocument.body')
  .then(cy.wrap)
  .find('p')
})



