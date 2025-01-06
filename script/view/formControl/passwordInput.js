import { elementAttribute } from "../attribute/eleAttr.js";
import { CreateElement } from "../element/createElement.js";

class PasswordInput {
    constructor(containerParent) {
        const passwordContainer = new CreateElement(containerParent, "div", elementAttribute.passwordContainer);
        const passwordLabel = new CreateElement(".password-container", "label", elementAttribute.passwordLabel, "Password : ");
        const passwordInput = new CreateElement(".password-container", "input", elementAttribute.passwordInput);
    }
}

export {PasswordInput};