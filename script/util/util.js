class Util {
    static referenceElement(element) {
        const refEle = document.querySelector(element);
        return refEle;
    }
    static setMultipleAttr(element, attr) {
        for(let key in attr) {
            element.setAttribute(key, attr[key]);
        }
    }
}

export {Util};