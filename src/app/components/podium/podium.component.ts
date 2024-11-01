import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { Router, RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { GameSettingsService } from '../../services/game-settings.service';

@Component({
  selector: 'app-podium',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    RouterLink,
    FooterComponent,
    HeaderComponent,
  ],
  templateUrl: './podium.component.html',
  styleUrl: './podium.component.css',
})
export class PodiumComponent implements OnInit {
  players: number = 1;

  constructor(
    private router: Router,
    private gameSettingsService: GameSettingsService
  ) {}

  ngOnInit(): void {
    this.players = this.gameSettingsService.getPlayerCapacity();
  }

  winner: string = 'Andrej';

  goToSettings(): void {
    this.router.navigate(['/game-settings']).then(() => {
      window.location.reload();
    });
  }

  exitGame(): void {
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
