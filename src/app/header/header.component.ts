import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { LinkComponent } from '../link/link.component';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage, MenuComponent, LinkComponent, IconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  mobileMenuOpen = false;
}
