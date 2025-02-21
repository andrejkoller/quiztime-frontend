import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameSettingsService } from '../../services/game-settings.service';
import { QuizCategory } from '../../models/quiz.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  quizCategory: QuizCategory | undefined;

  constructor(
    private router: Router,
    private gameSettingsService: GameSettingsService
  ) {
    this.quizCategory = this.gameSettingsService.getQuizCategory();
  }

  goBackToHome() {
    this.router.navigate(['/']);
  }

  exitGame() {
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
