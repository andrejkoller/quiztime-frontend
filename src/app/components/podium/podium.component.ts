import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { GameSettingsService } from '../../services/game-settings.service';
import { Player } from '../../models/player.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-podium',
  standalone: true,
  imports: [MatCard, MatCardContent, RouterLink, HeaderComponent, NgFor],
  templateUrl: './podium.component.html',
  styleUrl: './podium.component.css',
})
export class PodiumComponent implements OnInit {
  players: Player[] = [];
  playerCount: number = 1;

  constructor(
    private router: Router,
    private gameSettingsService: GameSettingsService
  ) {}

  ngOnInit(): void {
    this.playerCount = this.gameSettingsService.getPlayerCapacity();
    this.players = this.gameSettingsService.getPlayers();
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
