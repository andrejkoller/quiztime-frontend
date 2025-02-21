import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { Subscription } from 'rxjs';
import { GameSettingsService } from '../../../services/game-settings.service';

@Component({
  selector: 'app-rounds-count',
  standalone: true,
  imports: [MatSliderModule, ReactiveFormsModule],
  templateUrl: './rounds-count.component.html',
  styleUrl: './rounds-count.component.css',
})
export class RoundsCountComponent implements OnInit {
  questionCapacity = new FormControl(1);
  private subscription: Subscription | undefined;

  constructor(protected gameSettingsService: GameSettingsService) {}

  ngOnInit(): void {
    this.subscription = this.questionCapacity.valueChanges.subscribe(
      (value) => {
        this.gameSettingsService.setQuestionCapacity(value ?? 1);
      }
    );
  }

  incrementPlayerCapacity() {
    const currentValue = this.questionCapacity.value || 1;
    this.questionCapacity.setValue(currentValue + 1);
  }

  decrementPlayerCapacity() {
    const currentValue = this.questionCapacity.value || 1;
    if (currentValue > 1) {
      this.questionCapacity.setValue(currentValue - 1);
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
