import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { LinkComponent } from '../link/link.component';

@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage, MenuComponent, LinkComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
