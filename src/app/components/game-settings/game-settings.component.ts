import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { Router, RouterLink } from '@angular/router';
import { NgFor, NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlayerCountComponent } from './player-count/player-count.component';
import { DifficultySelectionComponent } from './difficulty-selection/difficulty-selection.component';
import { PlayerLivesComponent } from './player-lives/player-lives.component';
import { RoundsCountComponent } from './rounds-count/rounds-count.component';
import { PlayerNamesInputComponent } from './player-names-input/player-names-input.component';

@Component({
  selector: 'app-game-settings',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    RouterLink,
    NgIf,
    NgFor,
    NgForOf,
    FormsModule,
    PlayerCountComponent,
    DifficultySelectionComponent,
    PlayerLivesComponent,
    RoundsCountComponent,
    PlayerNamesInputComponent,
  ],
  templateUrl: './game-settings.component.html',
  styleUrl: './game-settings.component.css',
})
export class GameSettingsComponent implements OnInit {
  stepIndex: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goBackToHome() {
    this.router.navigate(['/']);
  }

  nextStep() {
    this.stepIndex++;
  }

  prevStep() {
    this.stepIndex--;
  }
}
