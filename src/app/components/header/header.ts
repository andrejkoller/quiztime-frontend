import { Component } from '@angular/core';
import { LucideAngularModule, Menu, ArrowLeft } from 'lucide-angular';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './header.html',
})
export class Header {
  Menu = Menu;
  ArrowLeft = ArrowLeft;

  constructor(public settingsService: SettingsService) {}

  navigateBack() {
    this.settingsService.prevStep();
  }
}
