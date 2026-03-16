import { Routes } from '@angular/router';
import { PlaygroundComponent } from './pages/playground/playground.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { PodiumComponent } from './pages/podium/podium.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  { path: 'playground', component: PlaygroundComponent },
  { path: 'players', component: PlayersTableComponent },
  { path: 'podium', component: PodiumComponent },
];
