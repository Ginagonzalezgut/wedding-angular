import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { CountdownComponent } from '../countdown/countdown.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent,CountdownComponent,CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
