import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  nombreControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  apellidoControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  mailControl = new FormControl('', [
    Validators.email,
    Validators.required,
    this.emailExists,
  ]);

  newsletterForm = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    mail: this.mailControl,
  });

  emailExists(control: FormControl) {
    if (control.value?.toLowerCase() === 'admin@admin.com') {
      return {
        emailExists: true,
      };
    }
    return null;
  }
  onSubmit() {
    console.log(this.newsletterForm.value);
  }
  constructor() {}

  ngOnInit(): void {}
}
