import { Routes } from '@angular/router';
import { Playground } from './pages/playground/playground';
import { Settings } from './pages/settings/settings';
import { Podium } from './pages/podium/podium';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'settings',
    component: Settings,
  },
  { path: 'playground', component: Playground },
  { path: 'podium', component: Podium },
];
