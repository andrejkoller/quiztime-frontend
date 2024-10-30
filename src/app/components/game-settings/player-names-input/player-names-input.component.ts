import { Component, OnInit } from '@angular/core';
import { GameSettingsService } from '../../../services/game-settings.service';

@Component({
  selector: 'app-player-names-input',
  standalone: true,
  imports: [],
  templateUrl: './player-names-input.component.html',
  styleUrl: './player-names-input.component.css',
})
export class PlayerNamesInputComponent implements OnInit {
  playerAmount: number | undefined;

  constructor(protected gameSettingsService: GameSettingsService) {}

  ngOnInit(): void {
    this.playerAmount = this.gameSettingsService.getPlayerCapacity();
    console.log(this.playerAmount);
  }
}
