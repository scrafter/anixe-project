import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-field-date',
  templateUrl: './field-date.component.html',
  styleUrls: ['./field-date.component.scss']
})
export class FieldDateComponent implements OnInit {
  @Input() name: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() parentFormGroup: FormGroup;
  @Input() customFilter;

  constructor() { }

  ngOnInit() {
  }
}
