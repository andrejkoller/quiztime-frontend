import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-setup',
  standalone: true,
  imports: [MatCard, MatCardContent],
  templateUrl: './player-setup.component.html',
  styleUrl: './player-setup.component.css',
})
export class PlayerSetupComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goBackToSettings() {
    this.router.navigate(['/game-settings']);
  }

  startGame() {
    
  }
}
