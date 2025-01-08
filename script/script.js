import { RegisterController } from "./controller/registerController.js";
import { ListAccount } from "./model/listAccount.js";

let accountList = new ListAccount();

accountList.newAccount("John doe", "johnDoe@email.com", "password", "male", "1999-01-01", "yes");

console.log(accountList);

const registerController = new RegisterController(accountList);