const elementAttribute = {
    formLoginAttr : {
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
    }
}

export {elementAttribute};