import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

const passengersOptions = [
  { value: '1', label: 'One' },
  { value: '2', label: 'Two' },
  { value: '3', label: 'Three' },
  { value: '4', label: 'Four' },
  { value: '5', label: 'Five' },
];

@Component({
  selector: 'app-spaceship-list-filters',
  templateUrl: './spaceship-list-filters.component.html',
  styleUrls: ['./spaceship-list-filters.component.scss']
})
export class SpaceshipListFiltersComponent implements OnInit, OnDestroy {
  filtersForm: FormGroup;
  passengersOptions = passengersOptions;
  sub: Subscription;

  constructor(private fa: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.sub = this.filtersForm.valueChanges.subscribe(form => {
      console.log(this.filtersForm.value);
      // here form data should be sent to service which will send request to server to update results list
    });
  }

  createForm() {
    this.filtersForm = this.fa.group({
      minPrice: [],
      maxPrice: [],
      passengersNr: [],
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
