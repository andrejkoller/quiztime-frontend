import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from '../../pages/home/home.component';
import { SettingsComponent } from '../../pages/settings/settings.component';
import { PlaygroundComponent } from '../../pages/playground/playground.component';
import { PodiumComponent } from '../../pages/podium/podium.component';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    HomeComponent,
    SettingsComponent,
    PlaygroundComponent,
    PodiumComponent,
    NgIf,
  ],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  constructor(protected router: Router) {}

  ngOnInit(): void {}
}
