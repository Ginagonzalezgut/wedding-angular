import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage, ButtonComponent, MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
