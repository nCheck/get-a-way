import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private authService: AuthService) {}

  ngOnInit() {
  }

  onSubmit() {
    this.authService.registerUser({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    });
  }
  onReset() {
    this.authService.onReset(this.loginForm);
  }
}
