import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameSettingsService } from '../../services/game-settings.service';
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
    private gameSettingsService: GameSettingsService,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    this.playerCount = this.gameSettingsService.getPlayerCapacity();
    this.players = this.playerService.getPlayers();
    console.log(this.players);
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
