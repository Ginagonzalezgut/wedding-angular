import { Component, Input, input } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { FooterComponent } from '../footer/footer.component';
import { CardComponent } from '../card/card.component';
import { HotelCardComponent } from "../hotel-card/hotel-card.component";

@Component({
  selector: 'app-city-page',
  imports: [HeroComponent, FooterComponent, CardComponent, HotelCardComponent],
  templateUrl: './city-page.component.html',
  styleUrl: './city-page.component.scss'
})

export class CityPageComponent {

}
