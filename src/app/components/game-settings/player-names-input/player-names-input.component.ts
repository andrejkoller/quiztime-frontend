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

@Component({
  selector: 'app-player-names-input',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.playerCount = this.gameSettingsService.getPlayerCapacity();
    this.playerLiveCount = this.gameSettingsService.getPlayerLiveCapacity();
  }

  submitPlayerNames() {
    if (this.currentPlayerIndex < this.playerCount) {
      const player = {
        name: this.nameControl.value,
        lives: this.playerLiveCount,
        score: 0,
        placement: 0,
      };

      this.playerList.push(player);
      this.nameControl.reset();
      this.currentPlayerIndex++;

      if (this.currentPlayerIndex == this.playerCount) {
        this.finalizePlayers();
      }
    }
  }

  finalizePlayers() {
    this.gameSettingsService.setPlayers(this.playerList);
    this.router.navigate(['/playground']);
  }
}
