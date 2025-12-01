import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { QuestionAnswerComponent } from '../question-answer/question-answer.component';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [HeaderComponent, QuestionAnswerComponent],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.css',
})
export class PlaygroundComponent implements OnInit {
  players: Player[] = [];

  constructor() {}

  ngOnInit(): void {}
}
