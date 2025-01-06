import { elementAttribute } from "../attribute/eleAttr.js";
import { CreateElement } from "../element/createElement.js";

class ChangePassword {
    constructor() {
        const changeContainer = new CreateElement(".login-form", "div", elementAttribute.changeContainer);
        const changePasswordEle = new CreateElement(".change-container", "a", elementAttribute.changePassword, "Change Password");
    }
}

export {ChangePassword};