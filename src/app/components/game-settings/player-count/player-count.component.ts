import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-player-count',
  standalone: true,
  imports: [MatSliderModule],
  templateUrl: './player-count.component.html',
  styleUrl: './player-count.component.css',
})
export class PlayerCountComponent {}
