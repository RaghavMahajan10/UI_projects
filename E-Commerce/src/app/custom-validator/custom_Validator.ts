import { AbstractControl, FormControl, ValidationErrors } from "@angular/forms";

export function passwordStrengthValidator(control: AbstractControl): ValidationErrors | null {
    const password: string = control.value;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumeric = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isValidLength = password.length >= 8 && password.length <= 16;

    if (hasUpperCase && hasLowerCase && hasNumeric && hasSpecialChar && isValidLength) {
        return null; // Valid password
    }
    else{

        return { passwordStrength: true }; // Invalid password
    }

}

// In custom_Validator.ts
export function matchPasswordValidator(passwordFieldName: string) {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.parent) {
      return null;
    }
    const password = control.parent.get(passwordFieldName)?.value;
    const confirmPassword = control.value;
    
    return password === confirmPassword ? null : { passwordMismatch: true };
  };
}