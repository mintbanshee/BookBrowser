import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth.service';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})

export class Login {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  errorMessage = '';

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  onSubmit(): void {
    this.errorMessage = '';

    // Validate the form
    // mark all as touched to trigger validation messages
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, password } = this.loginForm.getRawValue();

    this.authService.login(email ?? '', password ?? '').subscribe({
      next: (users) => {
        // if login successful, navigate to books list
        if (users.length > 0) {
          this.authService.setUser(users[0]);
          this.router.navigate(['/books']);
        } else {
          this.errorMessage = 'Sorry, we couldn\'t find an account with that email and password.';
        }
      },
      error: () => {
        this.errorMessage = 'Login unsuccessful. Please try again.';
      },
    });
  }

}
