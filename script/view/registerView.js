import { CreateElement } from "./element/createElement.js"
import { elementAttribute } from "./attribute/eleAttr.js"
import { NameInput } from "./formControl/nameInput.js";

class RegisterView {
    constructor() {
        const formEle = new CreateElement(".root", "form", elementAttribute.formLoginAttr);
        const nameEle = new NameInput();
    }
}

export {RegisterView};