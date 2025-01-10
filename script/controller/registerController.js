import { Util } from "../util/util.js";
import { RegisterView } from "../view/registerView.js";

class RegisterController {
    constructor(listAccount) {
        const registerView = new RegisterView();
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
        const emailInput = this.getInput("#email-input");
        if(listAccount.emailIsUnique(emailInput) === false) {
           console.log("Email not unique");
        } 
        else {
            const nameInput = this.getInput("#name-input");
            const passwordInput = this.getInput("#password-input");
            const dobInput = this.getInput("#date-input");
            const genderInput = this.getGenderInput("#male-input", "#female-input");
            const promotionInput = this.getPromotionInput("#promotion-input");
            listAccount.newAccount(nameInput, emailInput, passwordInput, genderInput, dobInput, promotionInput);
            console.log(listAccount);
        }
    } 

    getInput(element) {
        const Input = Util.referenceElement(element);
        
        const elementValue = Input.value;
        return elementValue;
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
    // checkValid(element, event) {
    //     if(element.checkValidity() === false) {
    //         const acitivityText = Util.referenceElement(".activity-text");
    //         acitivityText.textContent = "Please input the correct format";
    //         event.preventDefault();
    //     }
    // }
    
}

export {RegisterController};