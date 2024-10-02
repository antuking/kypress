// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import RegistrationPage from "../e2e/pages/registration.page";
import { faker } from "@faker-js/faker";
import { getRandomValueFromDict, getRandomString } from "../e2e/utils/common.utils";
import { VALID_EMAIL, INFO_SOURCE, SERVICES_OF_INTEREST, TYPE_OF_ASSOCIATION } from "../e2e/config/constants";

Cypress.Commands.add('login', () => {
    RegistrationPage.enterEmail(VALID_EMAIL)
        .enterLastName(faker.person.lastName())
        .enterFirstName(faker.person.firstName())
        .selectHearAboutUs(getRandomValueFromDict(INFO_SOURCE))
        .selectServicesOfInterest(SERVICES_OF_INTEREST.PRINTING)
        .selectTypeOfAssociation(TYPE_OF_ASSOCIATION.PARTNER)
        .enterExplanation(getRandomString(10))
        .submit()
})

Cypress.Commands.add('validateRequiredInputField', (inputFieldId, message) => {
    RegistrationPage.lblErrorValidation(inputFieldId)
        .should('be.visible')
        .and('have.text', message)
})

Cypress.Commands.add('unvalidateRequiredInputField', (inputFieldId) => {
    RegistrationPage.lblErrorValidation(inputFieldId)
        .should('not.exist')
})