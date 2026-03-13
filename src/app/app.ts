// src/app/app.ts

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

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
}
