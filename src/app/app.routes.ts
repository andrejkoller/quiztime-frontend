import { Routes } from '@angular/router';
import { QuizComponent } from './pages/quiz/quiz.component';
import { PlaygroundComponent } from './pages/playground/playground.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { PodiumComponent } from './pages/podium/podium.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';

export const routes: Routes = [
  { path: '', component: QuizComponent },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  { path: 'playground', component: PlaygroundComponent },
  { path: 'players', component: PlayersTableComponent },
  { path: 'podium', component: PodiumComponent },
];
