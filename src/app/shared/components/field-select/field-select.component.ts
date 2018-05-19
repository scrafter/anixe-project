import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-field-select',
  templateUrl: './field-select.component.html',
  styleUrls: ['./field-select.component.scss']
})
export class FieldSelectComponent implements OnInit {
  @Input() name: string;
  @Input() placeholder: string;
  @Input() parentFormGroup: FormGroup;
  @Input() idKey = '@id';
  @Input() options = [];

  constructor() { }

  ngOnInit() {
  }

  onChange(value) {
    const newValue = value ? value[this.idKey] : null;
    this.parentFormGroup.controls[this.name].setValue(newValue);
  }
}
