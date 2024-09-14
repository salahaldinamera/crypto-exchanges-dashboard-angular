import {Component, input, Input} from '@angular/core';
import {InputTextModule} from "primeng/inputtext";
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {FloatLabelModule} from "primeng/floatlabel";

@Component({
  selector: 'app-float-label-input',
  standalone: true,
  imports: [
    InputTextModule,
    ReactiveFormsModule,
    TranslateModule,
    FloatLabelModule,
    FormsModule
  ],
  templateUrl: './float-label-input.component.html',
  styleUrl: './float-label-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FloatLabelInputComponent,
      multi: true
    }
  ]
})
export class FloatLabelInputComponent implements ControlValueAccessor {
  title = input<string>('');

  value: any = '';
  isDisabled: boolean = false;
  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
