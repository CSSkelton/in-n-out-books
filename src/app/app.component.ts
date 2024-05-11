/**
 * title: app.component.ts
 * purpose: global declarations for application variables
 * author: Cody Skelton
 * date: 05.11.2024
 * Code sourced from WEB 425 exercise requirements
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  assignment: string;

  constructor() {
    this.assignment = 'Welcome to In-N-Out-Books'
  }
}
