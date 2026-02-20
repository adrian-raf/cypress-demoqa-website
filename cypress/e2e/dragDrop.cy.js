import { dragDropPage } from "../../page/dragDropPage";
describe('Drag and Drop Test', () => {
    beforeEach(() => {
        dragDropPage.navigateToDragDrop();
    });

    it('should drag and drop the box', () => {
        dragDropPage.dragBoxToDropBox();
        dragDropPage.droppedMessage.should('have.text', 'Dropped!');
    });
});