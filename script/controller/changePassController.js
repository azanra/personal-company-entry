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
        changeBtn.addEventListener("click" , (event) => {
            const emailInput = Util.getInput("#email-input");
            const passwordInput = Util.getInput("#password-input");
            if(listAccount.emailExist(emailInput) !== true) {
                console.log("email doesn't exist");
                Util.stopEvent(event);
            }
            else if(listAccount.emailExist(emailInput) === true) {
                if(listAccount.passwordUnique(emailInput, passwordInput) === false) {
                    this.samePassword();
                }
                else {
                    listAccount.changePassword(emailInput, passwordInput);
                    this.changeSuccess();
                }
            }
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
    samePassword() {
        Util.setTextContent("Don't use the same password");
        Util.removeText();
    }
    changeSuccess() {
        Util.setTextContent("Change success");
        Util.removeText();
    }
}

export {ChangeController};