import { elementAttribute } from "../attribute/eleAttr.js";
import { CreateElement } from "../element/createElement.js";

class DateInput {
    constructor() {
        const dateContainer = new CreateElement(".register-form", "div", elementAttribute.dateContainer);
        const dateLabel = new CreateElement(".date-container", "label", elementAttribute.dateLabel, "Date Of Birth : ");
        const dateInput = new CreateElement(".date-container", "input", elementAttribute.dateInput);
    }
} 

export {DateInput};