import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { User } from '../../models/user.model';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.scss'],
})

export class Signup {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  errorMessage = '';
  successMessage = '';

  signupForm = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]],
  });

  onSubmit(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }

    const { username, email, password, confirmPassword } = this.signupForm.getRawValue();
    
    if (password !== confirmPassword) {
      this.errorMessage = 'Passwords do not match. Please try again.';
      return;
    }

    const newUser: User = {
      username: username ?? '',
      email: email ?? '',
      password: password ?? ''
    };

    this.authService.signup(newUser).subscribe({
      next: (createdUser) => {
        this.successMessage = 'Signup successful! You can now log in.';
        this.authService.setUser(createdUser);
        this.router.navigate(['/books']);
      },
      error: () => {
        this.errorMessage = 'Unable to create account. Please try again.';
      }
    });
  }
}
