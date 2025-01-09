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
           const emailInput = this.getInput("#email-input");
            if(listAccount.emailIsUnique(emailInput) === false) {
               console.log("Email not unique");
            } 
            else {
                const nameInput = this.getInput("#name-input");
                const passwordInput = this.getInput("#password-input");
                const dobInput = this.getInput("#date-input");
                const genderInput = this.getGenderInput(Util.referenceElement("#male-input"), Util.referenceElement("#female-input"));
                console.log(genderInput);
                const promotionValue = this.getPromotionInput(Util.referenceElement("#promotion-input"));
                console.log(promotionValue);
            }
        })
    }
    getInput(element) {
        const Input = Util.referenceElement(element);
        const elementValue = Input.value;
        return elementValue;
    }
    getGenderInput(firstRadio, secondRadio) {
        if(firstRadio.checked) {
            return firstRadio.value;
        }
        if(secondRadio.checked) {
            return secondRadio.value;
        }
    }
    getPromotionInput(element) {
        if(element.checked) {
            return element.value;
        }
        else {
            return "no";
        }
    }
    
}

export {RegisterController};