import { dragDropPage } from "../../page/dragDropPage";
describe('Drag and Drop Test', () => {
    beforeEach(() => {
        dragDropPage.navigateToDragDrop();

    });

    it('should drag and drop the box', () => {
        dragDropPage.elements.droppedMessage().should('have.text', 'Drop Here');
        dragDropPage.dragBoxToDropBox();
        dragDropPage.elements.droppedMessage().should('have.text', 'Dropped!');
    });
});