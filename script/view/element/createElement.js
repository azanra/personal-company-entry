import { Util } from "../../util/util.js";

class CreateElement {
    constructor(ancestorElement, elementType, elementAttr, textContent) {
        const parentElement = Util.referenceElement(ancestorElement);
        const newElement = document.createElement(elementType);
        Util.setMultipleAttr(newElement, elementAttr);
    }
}

export {CreateElement}