import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [MatCard, MatCardContent, NgFor],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css',
})
export class PlayerComponent implements OnInit {
  players: Player[] = [
    {
      id: 1,
      name: 'Andrej',
      lives: this.getPlayerLives(),
      points: this.getPlayerPoints(),
    },
    {
      id: 2,
      name: 'Demian',
      lives: this.getPlayerLives(),
      points: this.getPlayerPoints(),
    },
    {
      id: 3,
      name: 'Ryan',
      lives: this.getPlayerLives(),
      points: this.getPlayerPoints(),
    },
  ];

  playerLives: number = 3;
  playerPoints: number = 0;

  constructor() {}

  ngOnInit(): void {
    console.log(this.players);
  }

  getPlayerLives(): number {
    return this.playerLives;
  }

  getPlayerPoints(): number {
    return this.playerPoints;
  }
}
