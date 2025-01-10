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
    static ifElementExist(element) {
        element.remove();
    }
    static removeView() {
        const registerView = Util.referenceElement(".register-form");
        Util.ifElementExist(registerView);
    }
}

export {Util};