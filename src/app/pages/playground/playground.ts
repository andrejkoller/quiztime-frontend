import { Component, OnInit } from '@angular/core';
import { Header } from '../../components/header/header';
import { QuestionAnswer } from '../../components/question-answer/question-answer';
import { Player } from '../../models/player';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [Header, QuestionAnswer],
  templateUrl: './playground.html',
})
export class Playground implements OnInit {
  players: Player[] = [];

  constructor() {}

  ngOnInit(): void {}
}
