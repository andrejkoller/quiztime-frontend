import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { GameSettingsService } from '../../../services/game-settings.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-player-count',
  standalone: true,
  imports: [MatSliderModule, ReactiveFormsModule],
  templateUrl: './player-count.component.html',
  styleUrl: './player-count.component.css',
})
export class PlayerCountComponent implements OnInit, OnDestroy {
  playerCapacity = new FormControl(1);
  private subscription: Subscription | undefined;

  constructor(private gameSettingsService: GameSettingsService) {}

  ngOnInit(): void {
    this.subscription = this.playerCapacity.valueChanges.subscribe((value) => {
      this.gameSettingsService.setPlayerCapacity(value ?? 1);
    });
  }

  incrementPlayerCapacity() {
    var currentValue = this.playerCapacity.value || 1;
    this.playerCapacity.setValue(currentValue + 1);
  }

  decrementPlayerCapacity() {
    var currentValue = this.playerCapacity.value || 1;
    if (currentValue > 1) {
      this.playerCapacity.setValue(currentValue - 1);
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
