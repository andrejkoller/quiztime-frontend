import { Component, OnInit } from '@angular/core';
import { GameSettingsService } from '../../../services/game-settings.service';
import { Router } from '@angular/router';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgFor } from '@angular/common';
import { Player } from '../../../models/player.model';
import { PlayerService } from '../../../services/player.service';

@Component({
  selector: 'app-player-names-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './player-names-input.component.html',
  styleUrl: './player-names-input.component.css',
})
export class PlayerNamesInputComponent implements OnInit {
  playerForm!: FormGroup;
  nameControl: FormControl = new FormControl('');

  player!: Player;
  playerList: Player[] = [];
  currentPlayerIndex = 0;

  playerCount!: number;
  playerLiveCount!: number;

  constructor(
    protected gameSettingsService: GameSettingsService,
    protected playerService: PlayerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.playerCount = this.gameSettingsService.getPlayerCapacity();
    this.playerLiveCount = this.gameSettingsService.getPlayerLiveCapacity();
  }

  submitPlayerNames() {
    if (this.currentPlayerIndex < this.playerCount) {
      const player = {
        id: this.currentPlayerIndex + 1,
        name: this.nameControl.value,
        lives: this.playerLiveCount,
        score: 0,
        placement: 0,
        emoji: '',
        color: '',
      };

      this.playerList.push(player);

      if (player.id === 1) {
        player.color = '#ff6f61';
      } else if (player.id === 2) {
        player.color = '#40dee8';
      } else if (player.id === 3) {
        player.color = '#f4d35e';
      } else if (player.id === 4) {
        player.color = '#8e44ad';
      }

      this.nameControl.reset();
      this.currentPlayerIndex++;

      if (this.currentPlayerIndex == this.playerCount) {
        this.finalizePlayers();
      }
    }
  }

  finalizePlayers() {
    this.playerService.setPlayers(this.playerList);
    this.router.navigate(['/playground']);
  }
}
