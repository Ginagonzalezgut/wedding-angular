import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-city-page',
  imports: [HeroComponent,FooterComponent],
  templateUrl: './city-page.component.html',
  styleUrl: './city-page.component.scss'
})
export class CityPageComponent {

}
