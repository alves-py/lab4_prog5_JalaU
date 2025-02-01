"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Room_1 = require("./models/Room");
const Suite_1 = require("./models/Suite");
// Criando instâncias das classes
const room1 = new Room_1.Room(1, "Standard", "Single", 150, 2);
const suite1 = new Suite_1.Suite(2, "Luxury Suite", 350, 4, true);
console.log(room1.getDescription());
console.log(suite1.getDescription());
// Criando um objeto de reserva baseado na interface
const booking = {
    roomId: suite1.id,
    userId: 101,
    startDate: new Date("2025-02-10"),
    endDate: new Date("2025-02-15"),
};
console.log(`Reserva criada: Quarto ID ${booking.roomId}, Usuário ID ${booking.userId}, de ${booking.startDate.toDateString()} a ${booking.endDate.toDateString()}.`);
