import BasePage from "./BasePage";

class DragDropPage extends BasePage {
    elements = {
        dragBox: () => cy.get('#draggable'),
        dropBox: () => cy.get('#droppable'),
    };

    navigateToDragDrop() {
        this.navigate('/');
        this.navigateToMenu('Interactions', 'Droppable');
        cy.wait(1000)
    }

    dragBoxToDropBox() {
        this.elements.dragBox().drag('#droppable', { force: true })
    }

    get droppedMessage() {
        return cy.contains('Dropped!');
    }
}


export const dragDropPage = new DragDropPage();
