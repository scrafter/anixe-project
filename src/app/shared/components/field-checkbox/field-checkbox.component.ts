import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-field-checkbox',
  templateUrl: './field-checkbox.component.html',
  styleUrls: ['./field-checkbox.component.scss']
})
export class FieldCheckboxComponent implements OnInit {
  @Input() value: any;
  @Input() idKey: string;
  @Input() isChecked = false;
  @Output() onChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onCheckboxChange() {
    this.isChecked = !this.isChecked;
    this.onChange.emit(this.value);
  }
}
