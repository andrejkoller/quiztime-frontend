import { NgFor, NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { GameSettingsService } from '../../services/game-settings.service';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [MatCard, MatCardContent, NgFor],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css',
})
export class PlayerComponent implements OnInit {
  players: Player[] = [];

  constructor(private gameSettingsService: GameSettingsService) {}

  ngOnInit(): void {
    this.fetchPlayers();
  }

  fetchPlayers() {
    this.players = this.gameSettingsService.getPlayers();
  }
}
