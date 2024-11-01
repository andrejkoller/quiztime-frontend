import { Component, OnInit } from '@angular/core';
import { GameSettingsService } from '../../../services/game-settings.service';
import { Router } from '@angular/router';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-player-names-input',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './player-names-input.component.html',
  styleUrl: './player-names-input.component.css',
})
export class PlayerNamesInputComponent implements OnInit {
  playerNamesForm: FormGroup;
  playerCapacity: number = 1;

  constructor(
    protected gameSettingsService: GameSettingsService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.playerNamesForm = this.fb.group({
      playerNames: this.fb.array([] as FormControl[]),
    });
  }

  ngOnInit(): void {
    this.playerCapacity = this.gameSettingsService.getPlayerCapacity();
    this.createPlayerNameFields();
  }

  get playerNames(): FormArray<FormControl> {
    return this.playerNamesForm.get('playerNames') as FormArray;
  }

  createPlayerNameFields() {
    for (let i = 0; i < this.playerCapacity; i++) {
      this.playerNames.push(new FormControl(''));
    }
  }

  submitPlayerNames() {
    const playerNames = this.playerNamesForm.value.playerNames;
    this.gameSettingsService.setPlayerNames(playerNames);
    this.router.navigate(['/playground']);
  }
}
