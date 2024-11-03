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
  players: Player[] = [];
  playerCount: number | undefined;
  playerLiveCount: number | undefined;

  constructor(
    protected gameSettingsService: GameSettingsService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.playerCount = this.gameSettingsService.getPlayerCapacity();
    this.playerLiveCount = this.gameSettingsService.getPlayerLiveCapacity();
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    const playerCount = this.playerCount ?? 1;

    this.playerForm = this.fb.group({
      players: this.fb.array(
        Array.from({ length: playerCount }, () =>
          this.fb.group({
            name: ['', Validators.required],
            lives: [this.playerLiveCount],
            points: [0],
          })
        )
      ),
    });
  }

  get playerControls() {
    return (this.playerForm.get('players') as FormArray).controls;
  }

  submitPlayerNames() {
    this.players = this.playerForm.value.players.map((player: any) => ({
      name: player.name,
      lives: player.lives,
      points: player.points,
    }));

    this.gameSettingsService.setPlayers(this.players);

    this.router.navigate(['/playground']);
  }
}
