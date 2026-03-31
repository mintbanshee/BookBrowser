// src/app/app.ts

import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './core/auth.service'

// component to display the main application layout and router outlet for navigation
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})

// main application component class
export class AppComponent {
  title = signal('BookBrowser');

  authService = inject(AuthService);

  logout() {
    this.authService.logout();
  }
}
