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

  goBack() {
    if (this.isPlayersRoute()) {
      this.router.navigate(['/playground']);
    } else {
      this.goBackToHome();
    }
  }

  isPlaygroundRoute(): boolean {
    return this.router.url === '/playground';
  }

  isPlayersRoute(): boolean {
    return this.router.url === '/players';
  }

  goToPlayers() {
    this.router.navigate(['/players']);
  }

  exitGame() {
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
