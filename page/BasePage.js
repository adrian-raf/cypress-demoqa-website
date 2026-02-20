export default class BasePage {
    navigate(path) {
        cy.visit(path);
    }

    typeText(element, text) {
        if (typeof text !== 'undefined' && text !== null) {
            element.clear();
            if (text !== '') {
                element.type(text);
            }
        }
    }

    clickElement(element) {
        element.click();
    }

    navigateToMenu(mainMenu, subMenu) {
        cy.contains(mainMenu).click();
        if (subMenu) {
            cy.contains(subMenu).click();
        }
    }
}