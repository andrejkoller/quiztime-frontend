import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GameSettingsService } from '../../services/game-settings.service';
import { Player } from '../../models/player.model';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [NgFor, CommonModule],
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
    console.log(this.players);
  }
}
