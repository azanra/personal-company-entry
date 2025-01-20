import { Util } from "../util/util.js";
import { ChangePasswordView } from "../view/changePasswordView.js";

class ChangeController {
    constructor(listAccount) {
        Util.removeView();
        const changeView = new ChangePasswordView(listAccount);
        const changeListener = this.changeBtnListener(listAccount);
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
}

export {ChangeController};