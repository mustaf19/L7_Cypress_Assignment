const { box1element, box2element, box1Header, box2Header } = require("../pageElements/DragAndDropElements");

class DragAndDrop_PO{
    
    dragAndDrop(){
        const dataTransfer = new DataTransfer();
        
        const box1 = cy.get(box1element)

        cy.get(box1Header).invoke('text').then(x=> {
            this.box1before = x
            cy.wrap(x).as('bx1Before')
        })
        cy.get(box2Header).invoke('text').then(x=> {
            this.box2before = x
            cy.wrap(x).as('bx2Before')
        })
        
        box1.trigger('dragstart', { dataTransfer })
        cy.get(box2element).trigger('drop', { dataTransfer })  
        
    }
    
    checkForDragAndDrop(){
        cy.wait(1000)
        cy.wrapContent(box1Header,'bx1After')
        cy.wrapContent(box2Header,'bx2After')
        cy.dragDoneOrNot('@bx1Before','@bx2After')
        cy.dragDoneOrNot('@bx2Before','@bx1After')
        
    }
}

module.exports = new DragAndDrop_PO()