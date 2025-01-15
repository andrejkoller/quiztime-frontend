import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private playersSource = new BehaviorSubject<Player[]>([]);
  player$ = this.playersSource.asObservable();

  initializePlayers(players: Player[]) {
    this.playersSource.next(players);
  }

  addPointToPlayer(playerIndex: number) {
    const players = this.playersSource.getValue();
    if (players && players[playerIndex]) {
      players[playerIndex].score += 1;
      this.playersSource.next(players);
    }
  }

  subtractLifeFromPlayer(playerIndex: number) {
    const players = this.playersSource.getValue();
    if (players && players[playerIndex]) {
      players[playerIndex].lives -= 1;
      this.playersSource.next(players);
    }
  }
}
