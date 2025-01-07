import { elementAttribute } from "./attribute/eleAttr.js";
import { CreateElement } from "./element/createElement.js";
import { ButtonEle } from "./formControl/button.js";
import { ChangePassword } from "./formControl/changePassword.js";
import { EmailInput } from "./formControl/emailInput.js";
import { PasswordInput } from "./formControl/passwordInput.js";

class LoginView {
    constructor() {
        const formEle = new CreateElement(".root", "form", elementAttribute.formLogin);
        const emailEle = new EmailInput(".login-form");
        const passwordEle = new PasswordInput(".login-form");
        const loginBtn = new ButtonEle(".login-form", elementAttribute.buttonContainer, ".btn-container", "button", elementAttribute.loginBtn, "Login");
        const activityEle = new CreateElement(".login-form", "div", elementAttribute.activityText);
        const changePasswordEle = new ChangePassword(".login-form");
    }
}

export {LoginView};