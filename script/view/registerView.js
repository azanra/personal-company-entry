import { CreateElement } from "./element/createElement.js"
import { elementAttribute } from "./attribute/eleAttr.js"
import { NameInput } from "./formControl/nameInput.js";
import { EmailInput } from "./formControl/emailInput.js";
import { PasswordInput } from "./formControl/passwordInput.js";
import { RadioInput } from "./formControl/radioInput.js";
import { PromotionInput } from "./formControl/promotionInput.js";

class RegisterView {
    constructor() {
        const formEle = new CreateElement(".root", "form", elementAttribute.formLoginAttr);
        const nameEle = new NameInput();
        const emailEle = new EmailInput();
        const passwordEle = new PasswordInput();
        const radioEle = new RadioInput();
        const promotionEle = new PromotionInput();
    }
}

export {RegisterView};