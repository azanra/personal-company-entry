import { elementAttribute } from "./attribute/eleAttr.js";
import { CreateElement } from "./element/createElement.js";

class SuccessView {
    constructor(email, name) {
        const successContainer = new CreateElement(".root", "div", elementAttribute.successContainer);
        const headerContainer = new CreateElement(".success-container", "div", elementAttribute.headerContainer);
        const successText = new CreateElement(".header-container", "p", elementAttribute.successText, "Login Success");
        const emailText = new CreateElement(".header-container", "p", elementAttribute.emailText, email);
        const welcomeText = new CreateElement(".success-container", "p", elementAttribute.nameText, name);

    }
}

export {SuccessView};