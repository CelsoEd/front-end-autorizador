import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {

  @Input() id: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() model: AbstractControl;

  onChange: any;
  onTouched: any;

  value: string;

  disabled = false;

  constructor() {
  }

  ngOnInit() {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  focus() {
    this.onTouched(this.value);
  }

  change() {
    this.onChange(this.value);
  }
}
