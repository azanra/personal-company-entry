import { elementAttribute } from "../attribute/eleAttr.js";
import { CreateElement } from "../element/createElement.js";

class RadioInput {
    constructor() {
        const fieldsetEle = new CreateElement(".register-form", "fieldset", elementAttribute.genderContainer);
        const legendEle = new CreateElement(".gender-container", "legend", elementAttribute.genderLegend, "Choose your gender");
        const maleLabel = new CreateElement(".gender-container", "label", elementAttribute.maleLabel, "Male : ");
        const maleInput = new CreateElement(".gender-container", "input", elementAttribute.maleInput);
        const femaleLabel = new CreateElement(".gender-container", "label", elementAttribute.femaleLabel, "Female : ");
        const femaleInput = new CreateElement(".gender-container", "input", elementAttribute.femaleInput);
    }
}

export {RadioInput};