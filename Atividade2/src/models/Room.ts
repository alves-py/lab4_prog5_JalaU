export class Room {
  id: number;
  name: string;
  type: string;
  pricePerNight: number;
  maxOccupancy: number;

  constructor(
    id: number,
    name: string,
    type: string,
    pricePerNight: number,
    maxOccupancy: number
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.pricePerNight = pricePerNight;
    this.maxOccupancy = maxOccupancy;
  }

  getDescription(): string {
    return `Quarto ${this.name} (${this.type}), acomoda até ${this.maxOccupancy} pessoas, por R$${this.pricePerNight}/noite.`;
  }
}
