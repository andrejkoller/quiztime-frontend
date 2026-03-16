import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '../../services/settings.service';
import { Player } from '../../models/player.model';
import { NgFor } from '@angular/common';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-podium',
  standalone: true,
  imports: [NgFor],
  templateUrl: './podium.component.html',
  styleUrl: './podium.component.css',
})
export class PodiumComponent implements OnInit {
  players: Player[] = [];
  playerCount: number = 1;

  constructor(
    private router: Router,
    private settingsService: SettingsService,
    private playerService: PlayerService,
  ) {}

  ngOnInit(): void {
    this.generatePlacements();
  }

  calculateWinner(): string {
    let winner: Player = this.players[0];
    for (let i = 1; i < this.playerCount; i++) {
      if (this.players[i].score > winner.score) {
        winner = this.players[i];
      }

      if (this.players[i].score === winner.score) {
        return "It's a tie!";
      }
    }
    return winner.name + ' wins! 🎉';
  }

  generatePlacements(): void {
    this.playerCount = this.settingsService.getPlayerCapacity();
    this.players = this.playerService.getPlayers();

    this.players.sort((a, b) => b.score - a.score);

    for (let i = 0; i < this.playerCount; i++) {
      this.players[i].placement = i + 1;

      switch (this.players[i].placement) {
        case 1:
          this.players[i].emoji = '🥇';
          break;
        case 2:
          this.players[i].emoji = '🥈';
          break;
        case 3:
          this.players[i].emoji = '🥉';
          break;
        default:
          this.players[i].emoji = '👎';
          break;
      }
    }
  }

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
