import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-player-lives',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './player-lives.component.html',
  styleUrl: './player-lives.component.css',
})
export class PlayerLivesComponent implements OnInit {
  playerLiveCapacity = new FormControl(1);
  private subscription: Subscription | undefined;

  constructor(protected settingsService: SettingsService) {}

  ngOnInit(): void {
    this.subscription = this.playerLiveCapacity.valueChanges.subscribe(
      (value) => {
        this.settingsService.setPlayerLiveCapacity(value ?? 1);
      },
    );
  }

  incrementPlayerCapacity() {
    const currentValue = this.playerLiveCapacity.value || 1;
    this.playerLiveCapacity.setValue(currentValue + 1);
  }

  decrementPlayerCapacity() {
    const currentValue = this.playerLiveCapacity.value || 1;
    if (currentValue > 1) {
      this.playerLiveCapacity.setValue(currentValue - 1);
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
