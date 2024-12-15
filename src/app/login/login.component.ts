import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  selector: 'app-login',
  template: ` 
<div class="login-container">
  <h1>Login</h1>
  <form [formGroup]="loginForm" (ngSubmit)="checkLogin()">
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
        Password must be at least 7 characters.
      </div>
      <div class="error-message"> {{ loginMessage }} </div>
    </div>
    <div class="form-group">
      <button type="submit" [disabled]="loginForm.invalid">Login</button>
    </div>
  </form>
  <div class="form-footer">
    <p>Don't have an account? <a [routerLink]="['/register']">Sign up</a></p>
  </div>
</div>
  
  `,
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  loginForm: FormGroup;
  loginMessage: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(7)]],
    });
  }

  checkLogin(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      this.authService.validateUser(username, password).subscribe(isValid => {
        this.loginMessage = isValid ? 'Login successful! Redirecting now!' : 'Invalid username or password.';
        this.router.navigate(['/checkout']);
      });
    }
  }
}
