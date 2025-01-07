import { ListAccount } from "./model/listAccount.js";
import { RegisterView } from "./view/registerView.js";
import { LoginView } from "./view/loginView.js";
import { SuccessView } from "./view/successView.js";

let accountList = new ListAccount();

console.log(accountList);

accountList.newAccount("John doe", "johnDoe@email.com", "password", "male", "1999-01-01", "yes");

console.log(accountList);

let emailUnique = accountList.emailIsUnique("johnDoe@email.com");

console.log(emailUnique);

accountList.changePassword("johnDoe@email.com", "randomPassword");

console.log(accountList);

let correctCredential = accountList.credentialIsCorrect("johnDoe@email.com", "randomPassword");

console.log(correctCredential);

// const registerView = new RegisterView();
// const loginView = new LoginView();
const successView = new SuccessView();