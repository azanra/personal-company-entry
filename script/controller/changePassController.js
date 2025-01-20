import { Util } from "../util/util.js";
import { ChangePasswordView } from "../view/changePasswordView.js";
import { LoginController } from "./loginController.js";

class ChangeController {
    constructor(listAccount) {
        Util.removeView();
        const changeView = new ChangePasswordView(listAccount);
        this.changeBtnListener(listAccount);
        this.loginListener(listAccount);
    }
    changeBtnListener(listAccount) {
        const changeBtn = Util.referenceElement(".changePass-btn");
        changeBtn.addEventListener("click" , () => {
            const emailInput = Util.getInput("#email-input");
            const passwordInput = Util.getInput("#password-input");
            listAccount.changePassword(emailInput, passwordInput);
            console.log("success");
        })
    }
    loginListener(listAccount) {
        Util.removeView();
        const loginBtn = Util.referenceElement(".login-btn");
        loginBtn.addEventListener("click", () => {
            const changeView = Util.referenceElement(".changePass-container");
            Util.ifElementExist(changeView);
            const loginController = new LoginController(listAccount);
        })
    }
}

export {ChangeController};