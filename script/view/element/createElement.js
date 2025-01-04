import { Util } from "../../util/util.js";

class CreateElement {
    constructor(ancestorElement, elementType, elementAttr, eleText) {
        const parentElement = Util.referenceElement(ancestorElement);
        const newElement = document.createElement(elementType);
        Util.setMultipleAttr(newElement, elementAttr);
        newElement.textContent = eleText;
        parentElement.append(newElement);
    }
}

export {CreateElement}