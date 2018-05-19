import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Spaceship } from '../shared/models/spaceship.model';

@Component({
  selector: 'app-spaceship-details',
  templateUrl: './spaceship-details.component.html',
  styleUrls: ['./spaceship-details.component.scss']
})
export class SpaceshipDetailsComponent implements OnInit {
  id: string;
  packagesSum = 0;
  spaceship: Spaceship = {
    name: 'Spaceship 1',
    maxPassengers: 5,
    description: 'Lorem ipsum',
    avatarUrl: 'https://i.ytimg.com/vi/wbSwFU6tY1c/maxresdefault.jpg',
    pricePerDay: 20000,
    gallery: [
      'https://i.ytimg.com/vi/wbSwFU6tY1c/maxresdefault.jpg',
      'https://i.ytimg.com/vi/wbSwFU6tY1c/maxresdefault.jpg',
      'https://i.ytimg.com/vi/wbSwFU6tY1c/maxresdefault.jpg',
      'https://i.ytimg.com/vi/wbSwFU6tY1c/maxresdefault.jpg',
      'https://i.ytimg.com/vi/wbSwFU6tY1c/maxresdefault.jpg',
    ],
    height: 30,
    color: 'black',
  };

  constructor(private route: ActivatedRoute) {
    // id for sending request to server purpose
    // in real application should be contained in resolver
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
  }

  onPackagesChange(sum) {
    this.packagesSum = sum;
  }
}
