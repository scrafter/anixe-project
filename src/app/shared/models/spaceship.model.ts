export class Spaceship {
  name: string;
  maxPassengers: number;
  description: string;
  avatarUrl: string;
  pricePerDay: number;

  constructor(spaceship?) {
    this.name = (spaceship && spaceship.name) || '';
    this.maxPassengers = (spaceship && spaceship.maxPassengers) || 1;
    this.description = (spaceship && spaceship.description) || '';
    this.avatarUrl = (spaceship && spaceship.avatarUrl) || null;
    this.pricePerDay = (spaceship && spaceship.pricePerDay) || null;
  }
}
