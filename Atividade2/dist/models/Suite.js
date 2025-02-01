"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Suite = void 0;
const Room_1 = require("./Room");
class Suite extends Room_1.Room {
    constructor(id, name, pricePerNight, maxOccupancy, hasAdditionalBed) {
        super(id, name, "Suite", pricePerNight, maxOccupancy);
        this.hasAdditionalBed = hasAdditionalBed;
    }
    getDescription() {
        return `${super.getDescription()} ${this.hasAdditionalBed ? "Possui cama extra." : "Não possui cama extra."}`;
    }
}
exports.Suite = Suite;
