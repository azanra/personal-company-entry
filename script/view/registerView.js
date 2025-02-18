import { CreateElement } from "./element/createElement.js"
import { elementAttribute } from "./attribute/eleAttr.js"
import { NameInput } from "./formControl/nameInput.js";
import { EmailInput } from "./formControl/emailInput.js";
import { PasswordInput } from "./formControl/passwordInput.js";
import { RadioInput } from "./formControl/radioInput.js";
import { PromotionInput } from "./formControl/promotionInput.js";
import { DateInput } from "./formControl/dateInput.js";
import { ButtonEle } from "./formControl/button.js";

class RegisterView {
    constructor() {
        const formEle = new CreateElement(".root", "form", elementAttribute.formRegister);
        const nameEle = new NameInput();
        const emailEle = new EmailInput(".register-form");
        const passwordEle = new PasswordInput(".register-form");
        const genderEle = new RadioInput();
        const dateEle = new DateInput();
        const promotionEle = new PromotionInput();
        const registerBtn = new ButtonEle(".register-form", elementAttribute.buttonContainer, ".btn-container", "button", elementAttribute.registerBtn, "Register");
        const activityEle = new CreateElement(".register-form", "div", elementAttribute.activityText);
    }
}

export {RegisterView};