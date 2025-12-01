import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { Player } from '../../models/player.model';
import { PlayerComponent } from '../player/player.component';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-players-table',
  standalone: true,
  imports: [PlayerComponent, HeaderComponent],
  templateUrl: './players-table.component.html',
  styleUrl: './players-table.component.css',
})
export class PlayersTableComponent implements OnInit {
  players: Player[] = [];

  constructor(protected playerService: PlayerService, private router: Router) {}

  ngOnInit(): void {
    this.players = this.playerService.getPlayers();
  }

  goBackToPlayground() {
    this.router.navigate(['/playground']);
  }
}
