import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthService } from '../auth.service';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-login',
  template: ` 
<div class="login-container">
  <h1>Login</h1>
  <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
    <div class="form-group">
      <label for="username">Username</label>
      <input id="username" type="text" formControlName="username" />
      <div class="error-message" *ngIf="loginForm.get('username')?.invalid && loginForm.get('username')?.touched">
        Username is required.
      </div>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input id="password" type="password" formControlName="password" />
      <div class="error-message" *ngIf="loginForm.get('password')?.invalid && loginForm.get('password')?.touched">
        Password must be at least 6 characters.
      </div>
    </div>
    <div class="form-group">
      <button type="submit" [disabled]="loginForm.invalid">Login</button>
    </div>
  </form>
  <div class="form-footer">
    <p>Don't have an account? <a href="/register">Sign up</a></p>
  </div>
</div>
  
  `,
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }
}
