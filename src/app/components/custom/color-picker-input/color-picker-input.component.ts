import {Component, input} from '@angular/core';
import {ColorPickerModule} from "primeng/colorpicker";
import {FloatLabelModule} from "primeng/floatlabel";
import {InputTextModule} from "primeng/inputtext";
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {FloatLabelInputComponent} from "@app/components/custom/float-label-input/float-label-input.component";

@Component({
  selector: 'app-color-picker-input',
  standalone: true,
  imports: [
    ColorPickerModule,
    FloatLabelModule,
    InputTextModule,
    ReactiveFormsModule,
    TranslateModule,
    FormsModule,
    FloatLabelInputComponent
  ],
  templateUrl: './color-picker-input.component.html',
  styleUrl: './color-picker-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ColorPickerInputComponent,
      multi: true
    }
  ]
})
export class ColorPickerInputComponent implements ControlValueAccessor {
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
