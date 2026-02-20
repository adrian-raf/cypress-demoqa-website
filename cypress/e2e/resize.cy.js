import { resizePage } from "../../page/ResizePage";
describe('Resize Test', () => {
    beforeEach(() => {
        resizePage.navigateToResize();
    });

    it('should resize the box', () => {
        resizePage.resizeRestrictedBox(200, 0);
        resizePage.elements.restrictedBox()
            .invoke('width')
            .should('be.closeTo', 400, 2);
    });
});