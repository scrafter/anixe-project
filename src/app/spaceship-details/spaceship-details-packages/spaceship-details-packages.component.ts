import { Component, EventEmitter, OnInit, Output } from '@angular/core';

const packagesOptions = [
  { id: 1, name: 'Package 1 $100', price: 100, },
  { id: 2, name: 'Package 2 $150', price: 150, },
  { id: 3, name: 'Package 3 $500', price: 500, },
  { id: 4, name: 'Package 4 $1000', price: 1000, },
  { id: 5, name: 'Package 5 $33000', price: 33000, },
];

@Component({
  selector: 'app-spaceship-details-packages',
  templateUrl: './spaceship-details-packages.component.html',
  styleUrls: ['./spaceship-details-packages.component.scss']
})
export class SpaceshipDetailsPackagesComponent implements OnInit {
  packagesOptions = packagesOptions;
  chosenPackages = [];
  @Output() onUpdate = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onChange(value) {
    const index = this.chosenPackages.findIndex(item => item.id === value.id);
    if (index === -1) {
      this.chosenPackages.push(value);
    } else {
      this.chosenPackages.splice(index, 1);
    }
    const sum = this.chosenPackages
                    .map(item => item.price)
                    .reduce((prev, current) => prev + current, 0);
    this.onUpdate.emit(sum);
  }
}
