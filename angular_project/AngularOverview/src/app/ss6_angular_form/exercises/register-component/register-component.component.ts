import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

export const reConfirmPass: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get("password");
  const confirmPassword = control.get("confirmPassword");

  if (password && confirmPassword && password.touched && password.value != confirmPassword.value) {
    return {"reConfirmPass": true};
  } else {
    return null;
  }

}

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})

export class RegisterComponentComponent implements OnInit {

  rfRegister: FormGroup

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.rfRegister = this._formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: [],
      confirmPassword: [],
      country: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(18)]],
      gender: ['', [Validators.required]],
      phone: ["", [Validators.required, Validators.pattern("[+84]\\d{9,10}")]]}, {validators: reConfirmPass})
  }

  onSubmit() {
    if (this.rfRegister.valid) {
      console.log(this.rfRegister.value)
    }
  }
}
