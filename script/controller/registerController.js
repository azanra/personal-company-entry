import { Util } from "../util/util.js";
import { RegisterView } from "../view/registerView.js";
import { LoginController } from "./loginController.js";

class RegisterController {
    constructor(listAccount) {
        const registerView = new RegisterView();
        Util.setTextContent("Use company email address");
        this.registerBtnListener(listAccount);
    }
    registerBtnListener(listAccount) {
        const formRegister = Util.referenceElement(".register-form");
        formRegister.addEventListener("submit", (event) => {
            event.preventDefault();
            this.onRegister(listAccount);
        });
    }
    onRegister(listAccount) {
        const emailInput = Util.getInput("#email-input");
        if(listAccount.emailIsUnique(emailInput) === false) {
           console.log("Email not unique");
           Util.setTextContent("Email not unique");
           Util.removeText();
        } 
        else {
            const nameInput = Util.getInput("#name-input");
            const passwordInput = Util.getInput("#password-input");
            const dobInput = Util.getInput("#date-input");
            const genderInput = this.getGenderInput("#male-input", "#female-input");
            const promotionInput = this.getPromotionInput("#promotion-input");
            listAccount.newAccount(nameInput, emailInput, passwordInput, genderInput, dobInput, promotionInput);
            console.log(listAccount);
            Util.removeView();
            const loginController = new LoginController(listAccount);
        }
    } 
    getGenderInput(firstRadio, secondRadio) {
        firstRadio = Util.referenceElement(firstRadio);
        secondRadio = Util.referenceElement(secondRadio);
        if(firstRadio.checked) {
            return firstRadio.value;
        }
        if(secondRadio.checked) {
            return secondRadio.value;
        }
    }
    getPromotionInput(element) {
        element = Util.referenceElement(element);
        if(element.checked) {
            return element.value;
        }
        else {
            return "no";
        }
    } 
}

export {RegisterController};