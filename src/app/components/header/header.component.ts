import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  maxTime = 100;
  timeLeft = 100;

  constructor(private router: Router) {}

  ngOnInit() {
  }

  startTimer() {
    const totalTime = 100;
    const interval = 1000;
    const decrement = 100 / totalTime;

    const timer = setInterval(() => {
      this.timeLeft -= decrement;
      if (this.timeLeft <= 0) {
        clearInterval(timer);
        this.timeLeft = 0;
      }
    }, interval);
  }

  exitGame() {
    this.router.navigate(['/']);
  }
}
