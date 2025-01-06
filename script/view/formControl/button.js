import { CreateElement } from "../element/createElement.js";

class ButtonEle {
    constructor(containerParent, containerAttr, ancestorElement, elementType, elementAttr, elementText) {
        const buttonContainer = new CreateElement(containerParent, "div", containerAttr);
        const buttonEle = new CreateElement(ancestorElement, elementType, elementAttr, elementText);
    }
}

export {ButtonEle};