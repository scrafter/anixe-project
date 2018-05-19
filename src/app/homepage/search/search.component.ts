import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

const passengersOptions = [
  { value: '1', label: 'One' },
  { value: '2', label: 'Two' },
  { value: '3', label: 'Three' },
  { value: '4', label: 'Four' },
  { value: '5', label: 'Five' },
];
const classOptions = [
  { id: 1, label: 'Standard' },
  { id: 2, label: 'Premium' },
  { id: 3, label: 'VIP' },
];
const placeOptions = [
  { id: 1, label: 'Wrocław' },
  { id: 2, label: 'Kraków' },
  { id: 3, label: 'Warszawa' },
  { id: 4, label: 'Poznań' },
];

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  passengersOptions = passengersOptions;
  classOptions = classOptions;
  placeOptions = placeOptions;
  fnFromDateFilter: Function;
  fnToDateFilter: Function;

  constructor(private fb: FormBuilder, private router: Router) {
    this.createForm();
  }

  ngOnInit() {
    this.fnFromDateFilter = this.fromDateFilter.bind(this);
    this.fnToDateFilter = this.toDateFilter.bind(this);
  }

  createForm() {
    this.searchForm = this.fb.group({
      fromDate: [],
      toDate: [],
      pickUp: [],
      dropOff: [],
      minPrice: [],
      maxPrice: [],
      class: [],
      maxPassengers: [],
    });
  }

  toDateFilter(d: Date) {
    const fromDate = this.searchForm.value.fromDate;
    return !!fromDate && d > fromDate;
  }

  fromDateFilter(d: Date) {
    const toDate = this.searchForm.value.toDate;
    const today = new Date();
    if (toDate) {
      return d > today && d < toDate;
    }
    return d > today;
  }

  onSubmit() {
    console.log(this.searchForm.value);
    // here one can pass form data to service and fetch data from BE
    this.router.navigate(['/spaceship-list']);
  }
}
