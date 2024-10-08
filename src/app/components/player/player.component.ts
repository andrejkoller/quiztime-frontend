import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [MatCard, MatCardContent],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css',
})
export class PlayerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
