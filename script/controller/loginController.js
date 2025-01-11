import { Util } from "../util/util.js";
import { LoginView } from "../view/loginView.js";
import { SuccessView } from "../view/successView.js";

class LoginController {
    constructor(listAccount) {
        const loginView = new LoginView();
        const loginForm = Util.referenceElement(".login-form");
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            this.loginListener(listAccount);
        })
    }
    loginListener(listAccount) {
       const emailValue = Util.getInput("#email-input");
       const passwordValue = Util.getInput("#password-input");
       const values = listAccount.credentialIsCorrect(emailValue, passwordValue);
       const credentialStatus = this.getStatus(values);
       const currentAccount = this.getAccount(values);
       if(credentialStatus === true) {
        Util.removeView();
        const successView = new SuccessView(currentAccount.email, currentAccount.name);
       }
       else {
        console.log("wrong credential")
       }
    }
    getStatus(value) {
        if(value !== false) {
            return value.credentialStatus;
        }
    }
    getAccount(value) {
        if(value !== null) {
            return value.currentAccount;
        }
    }
}

export {LoginController};