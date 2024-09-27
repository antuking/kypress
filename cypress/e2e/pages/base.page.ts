/// <reference types="cypress" />

export default class BasePage {
    protected open(url: string) : void {
        cy.visit(url);
    }

    protected pause(seconds: number) : void {
        cy.wait(seconds * 1000);
    }

    protected logInfo(message: string) : void {
        cy.log(message);
    }
}