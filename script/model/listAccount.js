import { Account } from "./account.js";

class ListAccount {
    constructor() {
        this.accountList = [];
    }
    newAccount(inputName, inputEmail, inputPassword, inputGender, inputDob, inputPromotion) {
        const createAccount = new Account(inputName, inputEmail, inputPassword, inputGender, inputDob, inputPromotion);
        this.accountList.push(createAccount);
    }
}

export {ListAccount};