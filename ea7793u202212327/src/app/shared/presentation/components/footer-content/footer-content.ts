import {FormGroup} from '@angular/forms';
import {TranslatePipe} from '@ngx-translate/core';
import {Component} from '@angular/core';


export class BaseForm {


  protected isInvalidControl = (form: FormGroup, controlName: string): boolean =>
    form.controls[controlName].invalid && form.controls[controlName].touched;

  protected errorKeyForControl = (form: FormGroup, controlName: string): string | null => {
    const errors = form.controls[controlName].errors;
    if (!errors) return null;
    const errorKey = Object.keys(errors)[0];
    switch (errorKey) {
      case 'required': return 'validation.required';
      case 'min': return 'validation.min';
      case 'pattern': return 'validation.integer';
      default: return 'validation.invalid';
    }
  };

  protected errorParamsForControl = (form: FormGroup, controlName: string): Record<string, unknown> =>
    ({min: form.controls[controlName].errors?.['min']?.min});
}
Component({
  selector: 'app-footer-content',
  imports : [TranslatePipe],
  templateUrl: './footer-content.html',
  styleUrls: ['./footer-content.css']
})
export class FooterContent {}
