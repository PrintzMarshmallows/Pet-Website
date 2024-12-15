import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service'; // Import AuthService

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  template: `
    <div class="form-container">
      <h1>Sign Up</h1>
      <form [formGroup]="signUpForm" (ngSubmit)="onSignUp()">
        <div class="form-group">
          <label for="username">Username</label>
          <input id="username" formControlName="username" />
          <div class="error-message" *ngIf="signUpForm.get('username')?.invalid && signUpForm.get('username')?.touched">
            Username is required.
          </div>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input id="password" type="password" formControlName="password" />
          <div class="error-message" *ngIf="signUpForm.get('password')?.invalid && signUpForm.get('password')?.touched">
            Password is required (min. 7 characters).
          </div>
        </div>
        <div class="form-group"> 
          <button type="submit" [disabled]="signUpForm.invalid">Sign Up</button>
        </div>
        <div class="error-message">{{ signUpMessage }}</div>
      </form>
      <div class="form-footer"> 
        <p> Already have an account? <a [routerLink]="['/login']">Login here</a> </p>
      </div>
    </div>
  `,
  styleUrls:['./register.component.css']
})

export class RegisterComponent {
  signUpForm: FormGroup;
  signUpMessage: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(7)]],
    });
  }

  onSignUp(): void {
    if (this.signUpForm.valid) {
      const { username, password } = this.signUpForm.value;

      this.authService.signUp(username, password).subscribe(
        success => {
          this.signUpMessage = success ? 'Sign up successful! Redirecting Now!' : 'Username already exists.';
          this.router.navigate(['/checkout']);
        },
        error => {
          this.signUpMessage = 'An error occurred during sign-up.';
        }
      );
    }
  }
}
