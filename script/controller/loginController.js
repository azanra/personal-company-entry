import { Util } from "../util/util.js";
import { ChangePasswordView } from "../view/changePasswordView.js";
import { ChangePassword } from "../view/formControl/changePassword.js";
import { LoginView } from "../view/loginView.js";
import { SuccessView } from "../view/successView.js";
import { ChangeController } from "./changePassController.js";

class LoginController {
    constructor(listAccount) {
        const loginView = new LoginView();
        this.loginReference(listAccount);
        this.changeReference(listAccount);
    }
    loginReference(listAccount) {
        const loginForm = Util.referenceElement(".login-form");
        loginForm.addEventListener("submit", (event) => {
            Util.stopEvent(event);
            this.loginListener(listAccount, event);
        })
    }
    changeReference(listAccount) {
        const changeLink = Util.referenceElement(".change-password");
        changeLink.addEventListener("click", (event) => {
            Util.removeView();
            const changeController = new ChangeController(listAccount);
            Util.stopEvent(event);
        })
    }
    loginListener(listAccount, event) {
       const emailValue = Util.getInput("#email-input");
       const passwordValue = Util.getInput("#password-input");
       const values = listAccount.credentialIsCorrect(emailValue, passwordValue);
       const credentialStatus = this.getStatus(values, event);
       const currentAccount = this.getAccount(values, event);
       if(credentialStatus === true) {
        Util.removeView();
        const successView = new SuccessView(currentAccount.email, currentAccount.name);
       }
       else {
        console.log("wrong credential")
       }
    }
    getStatus(value, event) {
        if(value === undefined) {
            Util.stopEvent(event);
        } else {
           return value.credentialStatus;
        }
    }
    getAccount(value, event) {
        if(value === undefined) {
            Util.stopEvent(event)
        } else {
            return value.currentAccount;
        }
    }
}

export {LoginController};