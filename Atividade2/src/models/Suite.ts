import { Room } from "./Room";

export class Suite extends Room {
  hasAdditionalBed: boolean;

  constructor(
    id: number,
    name: string,
    pricePerNight: number,
    maxOccupancy: number,
    hasAdditionalBed: boolean
  ) {
    super(id, name, "Suite", pricePerNight, maxOccupancy);
    this.hasAdditionalBed = hasAdditionalBed;
  }

  getDescription(): string {
    return `${super.getDescription()} ${
      this.hasAdditionalBed ? "Possui cama extra." : "Não possui cama extra."
    }`;
  }
}
