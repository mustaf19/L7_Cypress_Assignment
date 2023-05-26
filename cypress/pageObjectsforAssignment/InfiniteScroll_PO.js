import { divElements, mainElement } from "../pageElements/InfiniteScrollSitePageElements";

class InfiniteScroll_PO{

    scrollDownRandomly(){
        cy.get(divElements).then(x=>{
            cy.wait(2000)
            this.previousDivs = x.length
            cy.log(this.previousDivs)
            Cypress.env('numOfDivs',this.previousDivs)
            var t= Math.floor((Math.random() * 10) + 1);
            while(t){
                cy.window().scrollTo('bottom')
                cy.wait(2000)
                t-=1
            }
        })
    }
    
    checkMoreElementLoaded() {
        cy.get(divElements).its('length').should('be.gt',Cypress.env('numOfDivs'))
    }


}


module.exports = new InfiniteScroll_PO()


// testInfiniteScroll() {
//     cy.get(divElements).then(AllOfDivs=>{
//         var t= Math.floor((Math.random() * 10) + 1);
//         while(t){
//             cy.window().scrollTo('bottom')
//             cy.wait(2000)
//             t-=1
//         }
//         cy.get(divElements).its('length').should('be.gt',AllOfDivs.length)
//     })
// }

// addText(input){
//     cy.get('iframe')
//     .its('0.contentDocument.body')
//     .then(cy.wrap)
//     .find('p')
//     .clear()
//     cy.get('iframe')
//     .its('0.contentDocument.body')
//     .then(cy.wrap)
//     .find('p')
//     .type(input)
// }

// formatTextinEditor(){
//     cy.get('iframe')
//     .its('0.contentDocument.body')
//     .then(cy.wrap)
//     .find('p')
//     .type('{selectAll}')
//     .then(x=>{
//         cy.get('button[title="Bold"]').click()
//         cy.wait(1000)
//         cy.get('button[title="Italic"]').click()
//         cy.log("-->",x)
//     })
    
// }

// checkTextFormattingAndValue(input){
//     cy.get('iframe')
//     .its('0.contentDocument.body')
//     .then(cy.wrap)
//     .find('p')
//     .contains('New text')
//     .then(x=>{
//         cy.get(x).should('have.text',input)
//         cy.get(x).invoke('css','font-style').should('eq','italic')
//         const tmp = window.getComputedStyle(x[0]).getPropertyValue('font-weight')
//         cy.log(tmp)
//         if(typeof(tmp) == 'string'){
//             if(/[0-9]/.test(tmp)){
//                 if(Number(tmp)>=400){
//                     expect(tmp).to.equal('700')
//                 }
//             }
//         }
//     })

// }

// dragdrop(){
//     const dataTransfer = new DataTransfer();
    
//     const box1 = cy.get('#column-a')
//     const box2 = cy.get('#column-b')
    
//     cy.get('#column-a > header').invoke('text').then(x=> {
//         cy.wrap(x).as('bx1Before')
//     })
//     cy.get('#column-b > header').invoke('text').then(x=> {
//         cy.wrap(x).as('bx2Before')
//     })
    
//     box1.trigger('dragstart', { dataTransfer })
//     box2.trigger('drop', { dataTransfer })
    
//     cy.get('#column-a > header').invoke('text').then(x=> {
//         cy.wrap(x).as('bx1After')
//     })
//     cy.get('#column-b > header').invoke('text').then(x=> {
//         cy.wrap(x).as('bx2After')
//     })
    
//     cy.get('@bx1Before').then(x=>{
//         cy.log(x)
//         const bx1Before = x
//         cy.get('@bx2After').should('eq',bx1Before)
//     })
//     cy.get('@bx2Before').then(x=>{
//         cy.log(x)
//         const bx2Before = x
//         cy.get('@bx1After').should('eq',bx2Before)
//     })
// }