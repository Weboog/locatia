import { AbstractControl, ValidationErrors } from '@angular/forms';

export function price(control: AbstractControl): ValidationErrors | null {

  if (control.value.minPrice > control.value.maxPrice) {
    return {priceValid: true};
  }

  return null;

}
