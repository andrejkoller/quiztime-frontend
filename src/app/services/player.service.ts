import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Player } from '../models/player.model';
import { GameSettingsService } from './game-settings.service';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private playersSubject = new BehaviorSubject<Player[]>([]);
  players$ = this.playersSubject.asObservable();

  private players: Player[] = [];

  currentPlayerIndex: number = 0;

  setPlayers(players: Player[]) {
    this.playersSubject.next(players);
  }

  getPlayers(): Player[] {
    return this.playersSubject.getValue();
  }

  addPointToPlayer(index: number): void {
    this.players = this.getPlayers();
    if (this.players[index]) {
      this.players[index].score += 1;
      this.playersSubject.next([...this.players]);
    }
  }

  subtractLifeFromPlayer(index: number): void {
    this.players = this.getPlayers();
    if (this.players[index] && this.players[index].lives > 0) {
      this.players[index].lives -= 1;
      this.playersSubject.next([...this.players]);
    }
  }

  goToNextPlayer(): number {
    if (this.getPlayers().length === 1) {
      return 0;
    }

    return (this.currentPlayerIndex + 1) % this.getPlayers().length;
  }
}
