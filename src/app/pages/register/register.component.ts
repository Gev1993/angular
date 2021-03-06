import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: FormGroup;
  name: FormControl;
  email: FormControl;
  password: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.formsControl();
    this.createControls();
  }

  formsControl(): void {
    this.name = new FormControl('', [
      Validators.required, Validators.minLength(3), Validators.maxLength(15)
    ]);
    this.email = new FormControl('', [
      Validators.required, Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')
    ]);
    this.password = new FormControl('', [
      Validators.required, Validators.minLength(6), Validators.maxLength(18)
    ]);
  }

  createControls(): void {
    this.register = new FormGroup({
      name: this.name,
      email: this.email,
      password: this.password
    });
  }

  onSubmits(): void {
    if (this.register.valid) {
      console.log('submit');
      console.log(this.register.value);
    }
  }

}
