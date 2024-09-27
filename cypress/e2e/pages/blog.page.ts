/// <reference types="cypress" />

import { StringUtils } from "../utils/string.utils";
import BasePage from "./base.page";

const title_fragment = 'We Satisfy Your Global EOR & Payroll Needs';

export default class BlogPage extends BasePage {
    get btnSearch() { return cy.get('.search-toggle') }
    get txtSearch() { return cy.get('.search-toggle.show input.search-field') }
    get btnSubmit() { return cy.get('.search-toggle.show input.search-submit') }
    get lblBreadCrumbTitle() { return cy.get('.breadcrumb-title') }
    get lblBreadCrumbTrail() { return cy.get('li.trail-item.trail-end span:not(content)') }
    get hrefArticle() { return (name: string) => cy.get('h2.entry-title').contains(`${name}`, { matchCase: false }) }

    public clickOnSearch() : BlogPage {
        this.btnSearch.click();
        return this;
    }

    public enterSearchString(text: string) : BlogPage {
        this.txtSearch.type(text);
        return this;
    }

    public clickOnSubmit() : BlogPage {
        this.btnSubmit.click();
        return this;
    }

    public verifyBreadCrumbTitle(title: string) : BlogPage {
        this.lblBreadCrumbTitle.invoke('text').then((txt) => {
            expect(StringUtils.containsIgnoreCase(txt, title)).to.be.true;
        });
        return this;
    }

    public verifyBreadCrumbTrail(label: string) : BlogPage {
        this.lblBreadCrumbTrail.invoke('text').then((txt) => {
            expect(StringUtils.containsIgnoreCase(txt, label)).to.be.true;
        });
        return this;
    }

    public clickOnArticle(title: string) : BlogPage {
        this.hrefArticle(title).click({ force: true });
        return this;
    }
}