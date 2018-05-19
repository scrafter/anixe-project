export class Spaceship {
  name: string;
  maxPassengers: number;
  description: string;
  avatarUrl: string;
  pricePerDay: number;
  gallery: Array<string>;
  color: string;
  height: number;

  constructor(spaceship?) {
    this.name = (spaceship && spaceship.name) || '';
    this.maxPassengers = (spaceship && spaceship.maxPassengers) || 1;
    this.description = (spaceship && spaceship.description) || '';
    this.avatarUrl = (spaceship && spaceship.avatarUrl) || null;
    this.pricePerDay = (spaceship && spaceship.pricePerDay) || null;
    this.gallery = (spaceship && spaceship.gallery) || [];
    this.color = (spaceship && spaceship.color) || '';
    this.height = (spaceship && spaceship.height) || null;
  }
}
