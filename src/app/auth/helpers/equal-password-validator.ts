import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const equalPasswordValidation: ValidatorFn = (
    control: AbstractControl
): ValidationErrors | null => {
    const passControl = control.get('password');
    const confirmPassControl = control.get('confirmPassword');

    if (
        (passControl != null || confirmPassControl) &&
        passControl.value !== confirmPassControl.value
    ) {
        confirmPassControl.setErrors({
            equalPasswords: false,
            msg: 'Passwords must be equal',
        });
    }

    return (passControl != null || confirmPassControl) &&
        passControl.value !== confirmPassControl.value
        ? {
            contrasenasIguales: 'no es correcto',
            msg: 'Revisar validacion de contraseñas',
        }
        : null;
};
