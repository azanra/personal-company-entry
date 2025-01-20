import { Util } from "../util/util.js";
import { SuccessView } from "../view/successView.js";
import { LoginController } from "./loginController.js";

class SuccessController {
    constructor(email, name, listAccount) {
        Util.removeView();
        const successView = new SuccessView(email, name);
        this.logoutListener(listAccount);
    }
    logoutListener(listAccount) {
        const logoutBtn = Util.referenceElement(".logout-btn");
        logoutBtn.addEventListener("click", () => {
            Util.removeView()
            const loginController = new LoginController(listAccount);
        })
    }
}

export {SuccessController};