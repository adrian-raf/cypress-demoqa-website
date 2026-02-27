import BasePage from "./BasePage";

class DragDropPage extends BasePage {
    elements = {
        dragBox: () => cy.get('#draggable').first(),
        dropBox: () => cy.get('#simpleDropContainer #droppable'),
        droppedMessage: () => cy.get('#simpleDropContainer #droppable > p')

    };

    navigateToDragDrop() {
        this.navigate('/');
        this.navigateToMenu('Interactions', 'Droppable');
        this.elements.dropBox().should('be.visible')
    }

    dragBoxToDropBox() {
        cy.wait(1500);
        this.elements.dragBox().drag('#simpleDropContainer #droppable', { force: true });
    }



}


export const dragDropPage = new DragDropPage();
