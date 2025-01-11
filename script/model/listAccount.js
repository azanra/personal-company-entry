import { Account } from "./account.js";

class ListAccount {
    constructor() {
        this.accountList = [];
    }
    newAccount(inputName, inputEmail, inputPassword, inputGender, inputDob, inputPromotion) {
        const createAccount = new Account(inputName, inputEmail, inputPassword, inputGender, inputDob, inputPromotion);
        this.accountList.push(createAccount);
    }
    emailIsUnique(emailInput) {
        for(let i = 0; i < this.accountList.length; i++) {
            if(this.accountList[i].email === emailInput) {
                return false;
            }
        }
    }
    changePassword(emailInput, newPassword) {
        for(let i =0; i < this.accountList.length; i++) {
            if(this.accountList[i].email === emailInput) {
                this.accountList[i].password = newPassword;
            }
        }
    }
    credentialIsCorrect(emailInput, passwordInput) {
        for(let i = 0; i < this.accountList.length; i++) {
            if(this.accountList[i].email === emailInput && this.accountList[i].password === passwordInput) {
                return {
                    credentialStatus : true,
                    currentAccount : this.accountList[i]
                }
            }else {
                return false;
            }
        }
    }
}

export {ListAccount};