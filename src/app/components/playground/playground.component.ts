import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AnswersComponent } from '../answers/answers.component';
import { PlayerComponent } from '../player/player.component';
import { FooterComponent } from '../footer/footer.component';
import { QuestionAnswerComponent } from '../question-answer/question-answer.component';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [
    HeaderComponent,
    AnswersComponent,
    PlayerComponent,
    FooterComponent,
    QuestionAnswerComponent,
  ],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.css',
})
export class PlaygroundComponent implements OnInit {
  answer: any;

  constructor(protected quizService: QuizService) {}

  ngOnInit(): void {}
}
