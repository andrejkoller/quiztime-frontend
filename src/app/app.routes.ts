import { Routes } from '@angular/router';
import { QuizComponent } from './components/quiz/quiz.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { GameSettingsComponent } from './components/game-settings/game-settings.component';
import { PodiumComponent } from './components/podium/podium.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';

export const routes: Routes = [
  { path: '', component: QuizComponent },
  {
    path: 'game-settings',
    component: GameSettingsComponent,
  },
  { path: 'playground', component: PlaygroundComponent },
  { path: 'players', component: PlayersTableComponent },
  { path: 'podium', component: PodiumComponent },
];
