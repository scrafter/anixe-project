import { Component, OnInit } from '@angular/core';
import { Spaceship } from '../shared/models/spaceship.model';

@Component({
  selector: 'app-spaceship-list',
  templateUrl: './spaceship-list.component.html',
  styleUrls: ['./spaceship-list.component.scss']
})
export class SpaceshipListComponent implements OnInit {
  // In real application data should be fetch from server
  items: Array<Spaceship> = [
    {
      name: 'Spaceship 1',
      maxPassengers: 5,
      description: 'Lorem ipsum',
      avatarUrl: 'https://i.ytimg.com/vi/wbSwFU6tY1c/maxresdefault.jpg',
      pricePerDay: 20000,
    },
    {
      name: 'Spaceship 2',
      maxPassengers: 2,
      description: 'Lorem ipsum',
      avatarUrl: 'https://i.ytimg.com/vi/wbSwFU6tY1c/maxresdefault.jpg',
      pricePerDay: 10000,
    },
    {
      name: 'Spaceship 3',
      maxPassengers: 20,
      description: 'Lorem ipsum',
      avatarUrl: 'https://i.ytimg.com/vi/wbSwFU6tY1c/maxresdefault.jpg',
      pricePerDay: 200000,
    },
    {
      name: 'Spaceship 4',
      maxPassengers: 10,
      description: 'Lorem ipsum',
      avatarUrl: 'https://i.ytimg.com/vi/wbSwFU6tY1c/maxresdefault.jpg',
      pricePerDay: 50000,
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
