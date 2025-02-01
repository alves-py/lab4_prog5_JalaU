import { Room } from "./models/Room";
import { Suite } from "./models/Suite";
import { IBooking } from "./interfaces/IBooking";

// Criando instâncias das classes
const room1 = new Room(1, "Standard", "Single", 150, 2);
const suite1 = new Suite(2, "Luxury Suite", 350, 4, true);

console.log(room1.getDescription());
console.log(suite1.getDescription());

// Criando um objeto de reserva baseado na interface
const booking: IBooking = {
  roomId: suite1.id,
  userId: 101,
  startDate: new Date("2025-02-10"),
  endDate: new Date("2025-02-15"),
};

console.log(
  `Reserva criada: Quarto ID ${booking.roomId}, Usuário ID ${
    booking.userId
  }, de ${booking.startDate.toDateString()} a ${booking.endDate.toDateString()}.`
);
