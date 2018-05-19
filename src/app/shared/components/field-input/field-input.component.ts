import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-field-input',
  templateUrl: './field-input.component.html',
  styleUrls: ['./field-input.component.scss']
})
export class FieldInputComponent implements OnInit {
  @Input() type: string;
  @Input() parentFormGroup: FormGroup;
  @Input() name: string;
  @Input() placeholder = 'Type a value';
  @Input() min: number;
  @Input() max: number;
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}
