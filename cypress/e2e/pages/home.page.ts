/// <reference types="cypress" />

import { StringUtils } from "../utils/string.utils";
import BasePage from "./base.page";

const title_fragment = 'Your Premium Global HR Partner For Your Business Expansion Needs';

export default class HomePage extends BasePage {
    get btnBlock() { return cy.get('.ant-menu li.ant-menu-item[data-menu-id $= "blog"') }

    public open() : void {
        super.open(Cypress.env('BASE_URL'));
    }

    public verifyPageTitle() : HomePage {
        cy.title({timeout: 20000}).then((t) => {
            const fragment = StringUtils.containsIgnoreCase(t, title_fragment);
            const domain = StringUtils.containsIgnoreCase(t, Cypress.env('BASE_2ND_LEVEL_DOMAIN'));
            expect([fragment, domain]).to.deep.equal([true, true]);
        });
        return this;
    }

    public clickOnBlockMenu() : HomePage {
        this.btnBlock.click({ multiple: true });
        return this;
    }
}