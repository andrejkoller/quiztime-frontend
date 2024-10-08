import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { QuestionComponent } from '../question/question.component';
import { AnswersComponent } from '../answers/answers.component';
import { PlayerComponent } from '../player/player.component';
import { FooterComponent } from '../footer/footer.component';
import { QuestionAnswerComponent } from "../question-answer/question-answer.component";

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [
    HeaderComponent,
    QuestionComponent,
    AnswersComponent,
    PlayerComponent,
    FooterComponent,
    QuestionAnswerComponent
],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.css',
})
export class PlaygroundComponent {}
