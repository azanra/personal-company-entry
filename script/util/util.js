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
        if(element !== null) {
            element.remove();
        }
    }
    static removeView() {
        const registerView = Util.referenceElement(".register-form");
        const loginView = Util.referenceElement(".login-form");
        Util.ifElementExist(registerView);
    }
    static getInput(element) {
        const Input = Util.referenceElement(element);
        
        const elementValue = Input.value;
        return elementValue;
    }
}

export {Util};