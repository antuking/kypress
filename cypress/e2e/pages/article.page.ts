/// <reference types="cypress" />

import { StringUtils } from "../utils/string.utils";
import BasePage from "./base.page";

export default class ArticlePage extends BasePage {
    get lblParagraph() { return cy.get('.entry-content').find('p') }

    public verifyArticleTitle(title: string) : ArticlePage {
        cy.title({timeout: 10000}).then((t) => {
            const fragment = StringUtils.containsIgnoreCase(t, title);
            const domain = StringUtils.containsIgnoreCase(t, Cypress.env('BASE_2ND_LEVEL_DOMAIN'));
            expect([fragment, domain]).to.deep.equal([true, true]);
        });
        return this;
    }

    public verifyTheParagraphTextContains(text: string) : ArticlePage {
        // contains(text, { matchCase: false })
        this.lblParagraph.should('contain.text', text);
        return this;
    }
}