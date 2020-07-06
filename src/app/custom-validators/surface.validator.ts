import { AbstractControl, ValidationErrors } from '@angular/forms';

export function surface(control: AbstractControl): ValidationErrors | null {

  if (control.value.minSurface > control.value.maxSurface) {
    return {priceValid: true};
  }

  return null;

}
