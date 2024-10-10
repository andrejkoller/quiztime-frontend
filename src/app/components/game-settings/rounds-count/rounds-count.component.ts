import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-rounds-count',
  standalone: true,
  imports: [MatSliderModule],
  templateUrl: './rounds-count.component.html',
  styleUrl: './rounds-count.component.css'
})
export class RoundsCountComponent {

}
