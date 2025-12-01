import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { NgClass, NgFor, NgForOf } from '@angular/common';
import { GameSettingsService } from '../../services/game-settings.service';
import { ToastrService } from 'ngx-toastr';
import { catchError, map, of } from 'rxjs';
import { Router } from '@angular/router';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-question-answer',
  standalone: true,
  imports: [NgFor, NgForOf, NgClass],
  templateUrl: './question-answer.component.html',
  styleUrl: './question-answer.component.css',
})
export class QuestionAnswerComponent implements OnInit {
  questions: any[] = [];
  answers: any[] = [];

  currentQuestionIndex: number = 1;
  currentQuestion: any;

  selectedAnswer: string | null = null;
  isCorrect: boolean | null = null;

  constructor(
    protected quizService: QuizService,
    protected gameSettingsService: GameSettingsService,
    protected playerService: PlayerService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.fetchQuestions();
  }

  fetchQuestions() {
    const category = this.gameSettingsService.getQuizCategory();
    const difficulty = this.gameSettingsService.getQuizDifficulty();
    const amount = this.gameSettingsService.getQuestionCapacity();

    this.quizService
      .getQuestions(category, difficulty, amount)
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

  async goToNextQuestion() {
    if (this.selectedAnswer === this.currentQuestion.correctAnswer) {
      this.isCorrect = true;
      this.playerService.addPointToPlayer(
        this.playerService.currentPlayerIndex
      );
    } else {
      this.isCorrect = false;
      this.playerService.subtractLifeFromPlayer(
        this.playerService.currentPlayerIndex
      );
    }

    await this.wait(1500);

    this.selectedAnswer = null;
    this.isCorrect = null;
    this.currentQuestionIndex++;
    this.playerService.currentPlayerIndex = this.playerService.goToNextPlayer();

    if (
      this.currentQuestionIndex < this.questions.length &&
      this.playerService.getPlayers()[this.playerService.currentPlayerIndex]
        .lives > 0
    ) {
      this.currentQuestion = this.questions[this.currentQuestionIndex];
    } else {
      this.router.navigate(['/podium']);
    }
  }

  async wait(ms: number) {
    return await new Promise((resolve: any) => {
      setTimeout(resolve, ms);
    });
  }
}
