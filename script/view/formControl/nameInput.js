import { CreateElement } from "../element/createElement.js";
import { elementAttribute } from "../attribute/eleAttr.js";

class NameInput {
    constructor() {
        const nameContainer = new CreateElement(".register-form", "div", elementAttribute.nameContainer);
        const nameLabel = new CreateElement(".name-container", "label", elementAttribute.nameLabel, "Name : ");
        const nameInput = new CreateElement(".name-container", "input", elementAttribute.nameInput);
    }
}

export {NameInput};

