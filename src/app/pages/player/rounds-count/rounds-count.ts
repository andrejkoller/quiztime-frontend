import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { Subscription } from 'rxjs';
import { SettingsService } from '../../../services/settings.service';
import { LucideAngularModule, ArrowRight, ArrowLeft } from 'lucide-angular';

@Component({
  selector: 'app-rounds-count',
  standalone: true,
  imports: [MatSliderModule, ReactiveFormsModule, LucideAngularModule],
  templateUrl: './rounds-count.html',
})
export class RoundsCount implements OnInit {
  questionCapacity = new FormControl(1);
  private subscription: Subscription | undefined;

  ArrowRight = ArrowRight;
  ArrowLeft = ArrowLeft;

  constructor(protected settingsService: SettingsService) {}

  ngOnInit(): void {
    this.subscription = this.questionCapacity.valueChanges.subscribe(
      (value) => {
        this.settingsService.setQuestionCapacity(value ?? 1);
      },
    );
  }

  incrementRoundsCount() {
    const currentValue = this.questionCapacity.value || 1;
    this.questionCapacity.setValue(currentValue + 1);
  }

  decrementRoundsCount() {
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
