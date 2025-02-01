"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
class Room {
    constructor(id, name, type, pricePerNight, maxOccupancy) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.pricePerNight = pricePerNight;
        this.maxOccupancy = maxOccupancy;
    }
    getDescription() {
        return `Quarto ${this.name} (${this.type}), acomoda até ${this.maxOccupancy} pessoas, por R$${this.pricePerNight}/noite.`;
    }
}
exports.Room = Room;
