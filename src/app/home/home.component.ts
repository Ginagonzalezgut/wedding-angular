import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { CountdownComponent } from '../countdown/countdown.component';
import { CardComponent } from '../card/card.component';
import { ButtonComponent } from '../button/button.component';
import { FooterComponent } from '../footer/footer.component';
import { LinkComponent } from '../link/link.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    CountdownComponent,
    CardComponent,
    FooterComponent,
    LinkComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
