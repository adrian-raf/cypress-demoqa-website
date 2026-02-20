import { webTablesPage } from '../../page/WebTablePage';
import { parseCSV } from '../../utils/parsingCSV';

describe('Bulk Insert Registration on DemoQA Web Tables', () => {
    let usersData;

    before(() => {
        cy.readFile('cypress/fixtures/users.csv').then((csvContent) => {
            usersData = parseCSV(csvContent);
        });
    });

    beforeEach(() => {

        webTablesPage.navigateToWebTables();
    });

    it('Should successfully register multiple users from CSV data', { tags: '@positive' }, () => {
        expect(usersData).to.not.be.undefined;
        expect(usersData.length).to.be.greaterThan(0);

        usersData.forEach((user) => {
            cy.log(`Registering user: ${user.firstName} ${user.lastName}`);

            webTablesPage.clickAddRecord();
            webTablesPage.fillRegistrationForm(user);
            webTablesPage.submitForm();
            webTablesPage.searchUser(user.email);

            webTablesPage.getTableCellByText(user.email)
                .should('be.visible')
                .and('contain.text', user.email);

            webTablesPage.elements.searchBox().clear();
        });

    });
    it('Should failed to register by fill email field with empty', { tags: '@negative' }, () => {
        webTablesPage.clickAddRecord();
        webTablesPage.fillRegistrationForm({
            firstName: 'Adri',
            lastName: 'Rafly',
            email: '',
            age: '25',
            salary: '5000000',
            department: 'IT',
        });
        webTablesPage.submitForm();
        webTablesPage.elements.emailInput().should('match', ':invalid');
        cy.contains('td', 'Adri').should('not.exist');
    });

    it('Should failed to register by fill age field with alphabet', { tags: '@negative' }, () => {
        webTablesPage.clickAddRecord();
        webTablesPage.fillRegistrationForm({
            firstName: 'Intan',
            lastName: 'Dini',
            email: 'intandini@gmail.com',
            age: 'abcd',
            salary: '5000000',
            department: 'IT',
        });

        webTablesPage.submitForm();
        webTablesPage.elements.ageInput().should('match', ':invalid');
        cy.contains('td', 'intandini@gmail.com').should('not.exist');
    });

    it('Should failed to register by fill salary field with empty', { tags: '@negative' }, () => {
        webTablesPage.clickAddRecord();
        webTablesPage.fillRegistrationForm({
            firstName: 'Bayu',
            lastName: 'Pratama',
            email: 'bayupratama@gmail.com',
            age: '25',
            salary: '',
            department: 'IT',
        });
        webTablesPage.submitForm();
        webTablesPage.elements.salaryInput().should('match', ':invalid');
        cy.contains('td', 'bayupratama@gmail.com').should('not.exist');
    });
});