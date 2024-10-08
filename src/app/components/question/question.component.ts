import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
})
export class QuestionComponent implements OnInit {
  errorMessage: string = '';

  constructor(protected quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.fetchQuestions();
  }
}
