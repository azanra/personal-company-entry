import { Util } from "../util/util.js";
import { RegisterView } from "../view/registerView.js";

class RegisterController {
    constructor(listAccount) {
        const registerView = new RegisterView();
        this.registerBtnListener(listAccount);
    }
    registerBtnListener(listAccount) {
        const registerBtn = Util.referenceElement(".register-btn");
        registerBtn.addEventListener("click", () => {
           const emailInput = this.getEmailInput("#email-input");
            if(listAccount.emailIsUnique(emailInput) === false) {
               console.log("working");
            }
        })
    }
    getEmailInput(element) {
        const emailInput = Util.referenceElement(element);
        const emailValue = emailInput.value;
        return emailValue;
    }
}

export {RegisterController};