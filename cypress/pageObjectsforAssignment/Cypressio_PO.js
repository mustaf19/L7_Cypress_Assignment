const { navBarElements, docsTab, subMenu } = require("../pageElements/CypressioPageElements")

const navBarElementsName = ['Product','Docs','Community','Company','Pricing']

class Cypressio_PO{

    validateMenuItems=()=>{
        cy.get(navBarElements).should('be.visible')
        var count=0
        cy.get(navBarElements).each(element=>{
            cy.get(element).invoke('text').then(txt=>{  //customcmd
                expect(txt.trim()).to.equal(navBarElementsName[count])  //customcmd
                count+=1
            })
        })
    }

    hoverOverDocs=()=>{
        cy.get(docsTab).trigger('mouseover')
    }
    
    clickOnText=(input)=>{
        cy.get(subMenu).contains(input).then(x=>{
            cy.get(x).clickLink()  //custom command
        })
    }
}




module.exports = new Cypressio_PO()



// cy.get(docsTab).trigger('mouseover')
// cy.get(x).invoke('removeAttr','target').click()