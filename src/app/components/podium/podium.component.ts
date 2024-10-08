import { Component } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-podium',
  standalone: true,
  imports: [MatCard, MatCardContent, RouterLink, FooterComponent],
  templateUrl: './podium.component.html',
  styleUrl: './podium.component.css',
})
export class PodiumComponent {
  winner: string = 'Andrej';
}
