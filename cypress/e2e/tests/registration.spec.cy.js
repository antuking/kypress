import RegistrationPage from "../pages/registration.page";
import {getRandomValueFromDict, getRandomString} from "../utils/common.utils";
import { faker } from "@faker-js/faker";
import {
    ERR_VALIDATION_MESSAGES, INFO_SOURCE,
    INVALID_EMAIL_ERR_MESSAGES,
    SERVICES_OF_INTEREST,
    TYPE_OF_ASSOCIATION,
    VALID_EMAIL
} from "../config/constants";

describe("Account Registration", () => {
    beforeEach(() => {
        RegistrationPage.open();
    })

    it("should validate the error messages for missing or invalid required fields", () => {
        RegistrationPage.submit();

        for (let err in ERR_VALIDATION_MESSAGES) {
            RegistrationPage.validateRequiredField(ERR_VALIDATION_MESSAGES[err].id, ERR_VALIDATION_MESSAGES[err].msg);
        }

        RegistrationPage.enterEmail(getRandomString(6))
            .validateRequiredField(ERR_VALIDATION_MESSAGES.MISSING_EMAIL.id, INVALID_EMAIL_ERR_MESSAGES);

        RegistrationPage.enterEmail(getRandomString(6).concat("@"))
            .validateRequiredField(ERR_VALIDATION_MESSAGES.MISSING_EMAIL.id, INVALID_EMAIL_ERR_MESSAGES);

        RegistrationPage.enterLastName(faker.person.lastName())
            .txtInputField(ERR_VALIDATION_MESSAGES.MISSING_LAST_NAME.id).clear();
        RegistrationPage.validateRequiredField(ERR_VALIDATION_MESSAGES.MISSING_LAST_NAME.id, ERR_VALIDATION_MESSAGES.MISSING_LAST_NAME.msg);

        RegistrationPage.enterFirstName(faker.person.firstName())
            .txtInputField(ERR_VALIDATION_MESSAGES.MISSING_FIRST_NAME.id).clear();
        RegistrationPage.validateRequiredField(ERR_VALIDATION_MESSAGES.MISSING_FIRST_NAME.id, ERR_VALIDATION_MESSAGES.MISSING_FIRST_NAME.msg);

        RegistrationPage.selectServicesOfInterest(SERVICES_OF_INTEREST.PRINTING)
            .unvalidateRequiredField(ERR_VALIDATION_MESSAGES.MISSING_SOI.id)
            .selectServicesOfInterest(SERVICES_OF_INTEREST.ADVERTISEMENT)
            .unvalidateRequiredField(ERR_VALIDATION_MESSAGES.MISSING_SOI.id)
            .selectServicesOfInterest(SERVICES_OF_INTEREST.LOGISTICS)
            .unvalidateRequiredField(ERR_VALIDATION_MESSAGES.MISSING_SOI.id);

        RegistrationPage.unselectServicesOfInterest(SERVICES_OF_INTEREST.PRINTING)
            .unselectServicesOfInterest(SERVICES_OF_INTEREST.LOGISTICS)
            .unselectServicesOfInterest(SERVICES_OF_INTEREST.ADVERTISEMENT)
            .validateRequiredField(ERR_VALIDATION_MESSAGES.MISSING_SOI.id, ERR_VALIDATION_MESSAGES.MISSING_SOI.msg)

        RegistrationPage.selectTypeOfAssociation(TYPE_OF_ASSOCIATION.PROSPECT)
            .unvalidateRequiredField(ERR_VALIDATION_MESSAGES.MISSING_TOA.id)
            .selectTypeOfAssociation(TYPE_OF_ASSOCIATION.PARTNER)
            .unvalidateRequiredField(ERR_VALIDATION_MESSAGES.MISSING_TOA.id)
            .selectTypeOfAssociation(TYPE_OF_ASSOCIATION.RESELLER)
            .unvalidateRequiredField(ERR_VALIDATION_MESSAGES.MISSING_TOA.id)
            .selectTypeOfAssociation(TYPE_OF_ASSOCIATION.VENDOR)
            .unvalidateRequiredField(ERR_VALIDATION_MESSAGES.MISSING_TOA.id)
            .selectTypeOfAssociation(TYPE_OF_ASSOCIATION.OTHER)
            .unvalidateRequiredField(ERR_VALIDATION_MESSAGES.MISSING_TOA.id);
    })

    it("should submit the user information successfully", () => {
        RegistrationPage.enterEmail(VALID_EMAIL)
            .enterLastName(faker.person.lastName())
            .enterFirstName(faker.person.firstName())
            .selectHearAboutUs(getRandomValueFromDict(INFO_SOURCE))
            .selectServicesOfInterest(SERVICES_OF_INTEREST.PRINTING)
            .selectTypeOfAssociation(TYPE_OF_ASSOCIATION.PARTNER)
            .enterExplanation(getRandomString(10))
            .submit();

        RegistrationPage.validateSuccessSubmitMessage();
    })
})