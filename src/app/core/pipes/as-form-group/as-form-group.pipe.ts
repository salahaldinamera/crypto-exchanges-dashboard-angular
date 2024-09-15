import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Pipe({
  name: 'asFormGroupPipe',
  standalone: true
})
export class AsFormGroupPipe implements PipeTransform {
  transform(control: AbstractControl | null): FormGroup {
    if (control instanceof FormGroup) {
      return control;
    } else {
      throw new Error('Control is not a FormGroup');
    }
  }
}
