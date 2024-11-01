import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { NgClass, NgFor, NgForOf, NgIf } from '@angular/common';
import { MatCard, MatCardContent } from '@angular/material/card';
import { QuizCategory, QuizDifficulty } from '../../models/quiz.model';
import { GameSettingsService } from '../../services/game-settings.service';
import { ToastrService } from 'ngx-toastr';
import { catchError, map, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-answer',
  standalone: true,
  imports: [NgIf, MatCard, MatCardContent, NgFor, NgForOf, NgClass],
  templateUrl: './question-answer.component.html',
  styleUrl: './question-answer.component.css',
})
export class QuestionAnswerComponent implements OnInit {
  questions: any[] = [];
  answers: any[] = [];
  currentQuestionIndex: number = 1;

  selectedAnswer: string | null = null;
  currentQuestion: any;

  playerAmount: number = 0;
  selectedCategory: QuizCategory | undefined;
  selectedDifficulty: QuizDifficulty | undefined;
  playerLiveAmount: number = 0;
  questionAmount: number = 0;

  players: string = '';

  constructor(
    protected quizService: QuizService,
    protected gameSettingsService: GameSettingsService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchQuestions();
  }

  fetchQuestions() {
    this.playerAmount = this.gameSettingsService.getPlayerCapacity();
    this.selectedCategory = this.gameSettingsService.getQuizCategory();
    this.selectedDifficulty = this.gameSettingsService.getQuizDifficulty();
    this.playerLiveAmount = this.gameSettingsService.getPlayerLiveCapacity();
    this.questionAmount = this.gameSettingsService.getQuestionCapacity();
    this.players = this.gameSettingsService.getPlayerNames();

    this.quizService
      .getQuestions(
        this.selectedCategory,
        this.selectedDifficulty,
        this.questionAmount
      )
      .pipe(
        map((response: { results: any[] }) => response.results),
        catchError((error) => {
          const errorMessage = 'Could not load quiz. Please try again later.';
          this.toastr.error(errorMessage);
          return of([]);
        })
      )
      .subscribe((results: any[]) => {
        this.questions = results.map((q: any) => ({
          question: q.question,
          answers: this.shuffleAnswers([
            ...q.incorrect_answers,
            q.correct_answer,
          ]),
          correctAnswer: q.correct_answer,
        }));
        this.currentQuestion = this.questions[this.currentQuestionIndex];
      });
  }

  shuffleAnswers(answers: string[]): string[] {
    return answers.sort(() => Math.random() - 0.5);
  }

  selectAnswer(answer: string) {
    this.selectedAnswer = answer;
  }

  goToNextQuestion() {
    if (this.selectedAnswer === this.currentQuestion.correctAnswer) {
      this.toastr.success('Correct!');
    } else {
      this.toastr.error('Wrong answer.');
    }

    this.selectedAnswer = null;

    this.currentQuestionIndex++;

    if (this.currentQuestionIndex < this.questions.length) {
      this.currentQuestion = this.questions[this.currentQuestionIndex];
    } else {
      this.router.navigate(['/podium']).then(() => {
        this.toastr.info('Quiz Completed!');
      });
    }
  }
}
