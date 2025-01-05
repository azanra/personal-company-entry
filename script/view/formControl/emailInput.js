import { elementAttribute } from "../attribute/eleAttr.js";
import { CreateElement } from "../element/createElement.js";

class EmailInput {
    constructor() {
        const emailContainer = new CreateElement(".register-form", "div", elementAttribute.emailContainer);
        const emailLabel = new CreateElement(".email-container", "label", elementAttribute.emailLabel, "Email : ");
        const emailInput = new CreateElement(".email-container", "input", elementAttribute.emailInput);
    }
}

export {EmailInput};