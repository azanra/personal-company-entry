import { ListAccount } from "./model/listAccount.js";

let accountList = new ListAccount();

console.log(accountList);

accountList.newAccount("John doe", "johnDoe@email.com", "password", "male", "1999-01-01", "yes");

console.log(accountList);

let emailUnique = accountList.emailIsUnique("johnDoe@email.com");

console.log(emailUnique);

accountList.changePassword("johnDoe@email.com", "randomPassword");

console.log(accountList);