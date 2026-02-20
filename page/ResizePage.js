import BasePage from "./BasePage";

class ResizePage extends BasePage {
    elements = {
        restrictedBox: () => cy.get('#resizableBoxWithRestriction'),
        restrictedBoxHandle: () => cy.get('#resizableBoxWithRestriction .react-resizable-handle-se'),
    };

    navigateToResize() {
        this.navigate('/');
        this.navigateToMenu('Interactions', 'Resizable');
        this.elements.restrictedBox().should('be.visible', { timeout: 10000 });
    }

    resizeRestrictedBox(tambahLebar, tambahTinggi) {
        this.elements.restrictedBoxHandle().then(($handle) => {
            const rect = $handle[0].getBoundingClientRect();

            const startX = rect.x + (rect.width / 2);
            const startY = rect.y + (rect.height / 2);

            const targetX = startX + tambahLebar;
            const targetY = startY + tambahTinggi;

            this.elements.restrictedBoxHandle()
                .trigger('mousedown', { which: 1, clientX: startX, clientY: startY })
                .trigger('mousemove', { clientX: targetX, clientY: targetY })
                .trigger('mouseup', { force: true });
        });
    }

}

export const resizePage = new ResizePage();