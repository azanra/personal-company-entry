import { CreateElement } from "./element/createElement.js"
import { elementAttribute } from "./attribute/eleAttr.js"
import { NameInput } from "./formControl/nameInput.js";
import { EmailInput } from "./formControl/emailInput.js";
import { PasswordInput } from "./formControl/passwordInput.js";
import { RadioInput } from "./formControl/radioInput.js";
import { PromotionInput } from "./formControl/promotionInput.js";
import { DateInput } from "./formControl/dateInput.js";

class RegisterView {
    constructor() {
        const formEle = new CreateElement(".root", "form", elementAttribute.formLoginAttr);
        const nameEle = new NameInput();
        const emailEle = new EmailInput();
        const passwordEle = new PasswordInput();
        const genderEle = new RadioInput();
        const dateEle = new DateInput();
        const promotionEle = new PromotionInput();
    }
}

export {RegisterView};