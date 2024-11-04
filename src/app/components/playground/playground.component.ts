import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { PlayerComponent } from '../player/player.component';
import { QuestionAnswerComponent } from '../question-answer/question-answer.component';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [HeaderComponent, PlayerComponent, QuestionAnswerComponent],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.css',
})
export class PlaygroundComponent {}
