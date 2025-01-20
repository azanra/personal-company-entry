import { elementAttribute } from "./attribute/eleAttr.js";
import { CreateElement } from "./element/createElement.js";
import { ButtonEle } from "./formControl/button.js";
import { EmailInput } from "./formControl/emailInput.js";
import { PasswordInput } from "./formControl/passwordInput.js";

class ChangePasswordView {
    constructor(listAccount) {
        const changePass = new CreateElement(".root", "div", elementAttribute.changePass);
        const loginBtn = new ButtonEle(".changePass-container", elementAttribute.buttonContainer, ".btn-container", "button", elementAttribute.loginBtn, "Login");
        const emailEle = new EmailInput(".changePass-container");
        const passwordEle = new PasswordInput(".changePass-container");
        const changeBtn = new CreateElement(".changePass-container", "button", elementAttribute.changePassBtn, "Change Password");
        const activityEle = new CreateElement(".changePass-container", "div", elementAttribute.activityText);
    }
}

export {ChangePasswordView};