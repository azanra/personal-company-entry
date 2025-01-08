const elementAttribute = {
    formRegister : {
        "action" : "",
        "method" : "get",
        "class" : "register-form"
    },
    nameContainer : {
        "class" : "name-container"
    },
    nameLabel : {
        "class" : "name-label",
        "for" : "name-input"
    },
    nameInput : {
        "id" : "name-input",
        "name" : "name",
        "type" : "text",
        "minlength" : "3",
        "maxlength" : "30",
        "required" : "",
        "placeholder" : "John Doe"
    },
    emailContainer : {
        "class" : "email-container"
    },
    emailLabel : {
        "class" : "email-label",
        "for" : "email-input"
    },
    emailInput : {
        "type" : "email",
        "id" : "email-input",
        "name" : "email",
        "minlength" : "3",
        "maxlength" : "30",
        "required" : "",
        "placeholder" : "example@company.com",
        "pattern" : ".+@company\.com"
    },
    passwordContainer : {
        "class" : "password-container"
    },
    passwordLabel : {
        "class" : "password-label",
        "for" : "password-input"
    },
    passwordInput : {
        "type" : "password", 
        "id" : "password-input",
        "name" : "password",
        "minlength" : "8",
        "maxlength" : "30",
        "required" : "",
        "placeholder" : "8 to 30 characters"
    },
    genderContainer : {
        "class" : "gender-container"
    },
    genderLegend : {
        "class" : "gender-legend"
    },
    maleLabel : {
        "class" : "male-label",
        "for" : "male-input"
    },
    maleInput : {
        "type" : "radio",
        "id" : "male-input",
        "name" : "gender",
        "value" : "male",
        "required" : "",
    },
    femaleLabel : {
        "class" : "female-label",
        "for" : "female-input"
    },
    femaleInput : {
        "type" : "radio",
        "id" : "female-input",
        "name" : "gender",
        "value" : "female",
    },
    promotionContainer : {
        "class" : "promotion-container"
    },
    promotionLabel : {
        "class" : "promotion-label",
        "for" : "promotion-input"
    },
    promotionInput : {
        "type" : "checkbox",
        "id" : "promotion-input",
        "name" : "receivePromotion",
        "value" : "yes",
        "checked" : ""
    },
    dateContainer : {
        "class" : "date-container"
    },
    dateLabel : {
        "class" : "date-label",
        "for" : "date-input"
    },
    dateInput : {
        "type" : "date",
        "id" : "date-input",
        "name" : "dob",
        "required" : "",
    },
    buttonContainer : {
        "class" : "btn-container"
    },
    registerBtn : {
        "type" : "button",
        "class" : "register-btn"
    },
    formLogin : {
        "method" : "",
        "action" : "get",
        "class" : "login-form"
    },
    loginBtn : {    
        "type" : "submit",
        "class" : "login-btn"
    },
    activityText : {
        "class" : "activity-text"
    },
    changeContainer : {
        "class" : "change-container"
    },
    changePassword : {
        "class" : "change-password",
        "href" : ""
    },
    successContainer : {
        "class" : "success-container"
    },
    headerContainer : {
        "class" : "header-container"
    },
    successText : {
        "class" : "success-text"
    },
    emailText : {
        "class" : "email-text"
    },
    nameText : {
        "class" : "name-text"
    },
    logoutBtn : {
        "type" : "submit",
        "class" : "logout-btn"
    },
    changePass : {
        "class" : "changePass-container"
    },
    changePassBtn : {
        "type" : "submit",
        "class" : "changePass-btn"
    }
}

export {elementAttribute};