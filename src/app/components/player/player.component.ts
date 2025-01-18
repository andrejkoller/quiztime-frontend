import { CommonModule, NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../../models/player.model';
import { PlayerService } from '../../services/player.service';
import { GameSettingsService } from '../../services/game-settings.service';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css',
})
export class PlayerComponent implements OnInit {
  @Input()
  players: Player[] = [];

  constructor(protected playerService: PlayerService) {}

  ngOnInit(): void {
    this.fetchPlayers();
  }

  fetchPlayers() {
    this.players = this.playerService.getPlayers();
  }

  getArray(count: number): number[] {
    return Array.from({ length: count });
  }
}
