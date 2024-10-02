import BasePage from "./base.page";
import { BASE_URL, SUCCESS_SUBMIT_MSG } from "../config/constants";

class RegistrationPage extends BasePage {
    get txtEmail() { return cy.get('input#form_item_email'); }
    get lblErrorValidation() { return (idField) => cy.get(`#${idField} .ant-form-item-explain-error`, { timeout: 1000 }); }
    get txtFirstName() { return cy.get('input#form_item_firstName'); }
    get ddlHearAboutUs() { return cy.get('input#form_item_infoSource'); }
    get lblHearAboutUs() { return (lbItem) => cy.get('#form_item_infoSource_list + div .ant-select-item-option-content').contains(`${lbItem}`); }
    get ckbSOI() { return (soiIdx) => cy.get(`#form_item_servicesOfInterest label.ant-checkbox-wrapper input[type="checkbox"][value="${soiIdx}"]`); }
    get rdoTOA() { return (toaIdx) => cy.get(`#form_item_typeOfAssociation label.ant-radio-wrapper input[type="radio"][value="${toaIdx}"]`); }
    get txaExplanation() { return cy.get('textarea#form_item_explanation'); }
    get lblSuccessSubmit() { return cy.get('.ant-alert-content .ant-alert-message'); }

    get txtInputField() { return (idField) => cy.get(`#${idField} input`); }
    get btnSubmit() { return cy.get('button[type="submit"]'); }

    open() {
        return super.open(BASE_URL);
    }

    enterEmail(email) {
        this.txtEmail.clear().type(email);
        return this;
    }

    clearField(id) {
        this.clear(this.txtInputField(id));
        return this;
    }

    enterLastName(lastName) {
        this.txtInputField("field_lastName").type(lastName);
        return this;
    }

    enterFirstName(firstName) {
        this.txtFirstName.type(firstName);
        return this;
    }

    selectHearAboutUs(item) {
        this.ddlHearAboutUs.click({ force: true });
        this.lblHearAboutUs(item).click();
        return this;
    }

    selectServicesOfInterest(item) {
        this.ckbSOI(item.index).check();
        return this;
    }

    unselectServicesOfInterest(item) {
        this.ckbSOI(item.index).uncheck();
        return this;
    }

    selectTypeOfAssociation(item) {
        this.rdoTOA(item.index).click();
        return this;
    }

    enterExplanation(exp) {
        this.txaExplanation.type(exp);
        return this;
    }

    submit() {
        this.btnSubmit.click();
        return this;
    }

    validateRequiredField(id, msg) {
        cy.validateRequiredInputField(id, msg);
        return this;
    }

    unvalidateRequiredField(id) {
        cy.unvalidateRequiredInputField(id);
        return this;
    }

    validateSuccessSubmitMessage() {
        this.lblSuccessSubmit.should('be.visible')
            .and('have.text', SUCCESS_SUBMIT_MSG);
        return this;
    }
}

export default new RegistrationPage();