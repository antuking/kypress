//Add all the constants here
export const BASE_URL = 'https://raksul.github.io/recruit-qa-engineer-work-sample/';

export const VALID_EMAIL = "test@abc.com";
export const SUCCESS_SUBMIT_MSG = "Your inquiry has been submitted successfully!";

export const INVALID_EMAIL_ERR_MESSAGES = "'email' is not a valid email";
export const ERR_VALIDATION_MESSAGES = {
    MISSING_EMAIL : { id: "field_email", msg: "'email' is required" },
    MISSING_LAST_NAME : { id: "field_lastName", msg: "'lastName' is required" },
    MISSING_FIRST_NAME : { id: "field_firstName", msg: "'firstName' is required" },
    MISSING_INFO_SOURCE : { id: "field_infoSource", msg: "'infoSource' is required" },
    MISSING_SOI : { id: "field_servicesOfInterest", msg: "'servicesOfInterest' is required" },
    MISSING_TOA : { id: "field_typeOfAssociation", msg: "'typeOfAssociation' is required" },
};

export const SERVICES_OF_INTEREST = {
    PRINTING : { lbl: 'Printing', index: 1 },
    LOGISTICS : { lbl: 'Logistics', index: 2 },
    ADVERTISEMENT : { lbl: 'Advertisement', index: 3 },
};

export const TYPE_OF_ASSOCIATION = {
    PROSPECT : { lbl: 'Prospect', index: 1 },
    PARTNER : { lbl: 'Partner', index: 2 },
    RESELLER : { lbl: 'Reseller', index: 3 },
    VENDOR : { lbl: 'Vendor', index: 4 },
    OTHER : { lbl: 'Other', index: 5 },
};

export const INFO_SOURCE = {
    SEARCH_ENGINES : 'Search engines',
    RECOMMENDED_BY_FRIEND : 'Recommended by friend',
    SOCIAL_MEDIA : 'Social media',
    EMAIL_MARKETING : 'Email marketing',
    OTHER : 'Other',
}