import BasePage from './BasePage';

class WebTablesPage extends BasePage {
    elements = {
        addButton: () => cy.get('#addNewRecordButton'),
        firstNameInput: () => cy.get('#firstName'),
        lastNameInput: () => cy.get('#lastName'),
        emailInput: () => cy.get('#userEmail'),
        ageInput: () => cy.get('#age'),
        salaryInput: () => cy.get('#salary'),
        departmentInput: () => cy.get('#department'),
        submitButton: () => cy.get('#submit'),
        searchBox: () => cy.get('#searchBox'),
        closeButton: () => cy.get('.btn-close')

    }

    navigateToWebTables() {
        this.navigate('/');
        this.navigateToMenu('Elements', 'Web Tables');
    }

    clickAddRecord() {
        this.clickElement(this.elements.addButton());
    }

    fillRegistrationForm(user) {
        this.typeText(this.elements.firstNameInput(), user.firstName);
        this.typeText(this.elements.lastNameInput(), user.lastName);
        this.typeText(this.elements.emailInput(), user.email);
        this.typeText(this.elements.ageInput(), user.age);
        this.typeText(this.elements.salaryInput(), user.salary);
        this.typeText(this.elements.departmentInput(), user.department);
    }

    submitForm() {
        this.clickElement(this.elements.submitButton());
    }

    clickCloseButton() {
        this.clickElement(this.elements.closeButton());
    }


    searchUser(email) {
        this.typeText(this.elements.searchBox(), email);
    }

    getTableCellByText(text) {
        return cy.contains('td', text);
    }
}

export const webTablesPage = new WebTablesPage();