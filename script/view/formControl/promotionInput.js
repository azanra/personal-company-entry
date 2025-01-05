import { elementAttribute } from "../attribute/eleAttr.js";
import { CreateElement } from "../element/createElement.js";

class PromotionInput {
    constructor() {
        const promotionContainer = new CreateElement(".register-form", "div", elementAttribute.promotionContainer);
        const promotionLabel = new CreateElement(".promotion-container", "label", elementAttribute.promotionLabel, "Receive promotion : ");
        const promotionInput = new CreateElement(".promotion-container", "input", elementAttribute.promotionInput);
    }
}

export {PromotionInput}