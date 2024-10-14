import { Component, Input, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { NgFor, NgForOf, NgIf } from '@angular/common';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-question-answer',
  standalone: true,
  imports: [NgIf, MatCard, MatCardContent, NgFor, NgForOf],
  templateUrl: './question-answer.component.html',
  styleUrl: './question-answer.component.css',
})
export class QuestionAnswerComponent implements OnInit {
  constructor(protected quizService: QuizService) {}

  @Input()
  selectedAnswer: any;

  ngOnInit(): void {
    this.quizService.fetchQuestions();
  }
}
