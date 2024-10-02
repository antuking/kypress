class BasePage {
    open(path) {
        return cy.visit(path);
    }

    clear(input) {
        cy.get(input).clear();
    }
}

export default BasePage;