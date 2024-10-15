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

  checkAnswers(selectedAnswer: string) {
    const correctAnswer =
      this.quizService.questions[this.quizService.currentQuestionIndex]
        .correctAnswer;
    if (selectedAnswer === correctAnswer) {
      alert('Correct!');
    } else {
      alert('Wrong!');
    }

    this.nextQuestion();
  }

  nextQuestion() {
    if (
      this.quizService.currentQuestionIndex <
      this.quizService.questions.length - 1
    ) {
      this.quizService.currentQuestionIndex++;
    } else {
      alert('Quiz completed!');
    }
  }
}
