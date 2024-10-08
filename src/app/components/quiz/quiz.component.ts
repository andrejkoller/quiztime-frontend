import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from '../home/home.component';
import { GameSettingsComponent } from '../game-settings/game-settings.component';
import { PlaygroundComponent } from '../playground/playground.component';
import { PodiumComponent } from '../podium/podium.component';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    HomeComponent,
    GameSettingsComponent,
    PlaygroundComponent,
    PodiumComponent,
    RouterLink,
    NgIf,
  ],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
})
export class QuizComponent implements OnInit {
  constructor(protected router: Router) {}

  ngOnInit(): void {}
}
