import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
})
export class Home {
  constructor(private router: Router) {}

  navigateToSettings() {
    this.router.navigate(['/settings']);
  }
}
