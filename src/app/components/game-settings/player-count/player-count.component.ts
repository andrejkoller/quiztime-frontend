import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { GameSettingsService } from '../../../services/game-settings.service';
import { Subscription } from 'rxjs';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-player-count',
  standalone: true,
  imports: [MatSliderModule, ReactiveFormsModule, NgClass],
  templateUrl: './player-count.component.html',
  styleUrl: './player-count.component.css',
})
export class PlayerCountComponent implements OnInit, OnDestroy {
  playerCapacity = new FormControl(1);
  private subscription: Subscription | undefined;

  playerCount: number = 0;

  constructor(protected gameSettingsService: GameSettingsService) {}

  ngOnInit(): void {
    this.subscription = this.playerCapacity.valueChanges.subscribe((value) => {
      this.gameSettingsService.setPlayerCapacity(value ?? 1);
    });
  }

  setPlayerMode(playerCount: number): void {
    this.gameSettingsService.setPlayerCapacity(playerCount);
    this.playerCount = playerCount;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
