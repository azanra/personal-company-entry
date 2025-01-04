import { CreateElement } from "./element/createElement.js"
import { elementAttribute } from "./attribute/eleAttr.js"

class RegisterView {
    constructor() {
        const formEle = new CreateElement(".root", "form", elementAttribute.formLoginAttr);
    }
}

export {RegisterView};