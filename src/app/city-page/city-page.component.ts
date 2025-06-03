import { Component, Input, input } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { FooterComponent } from '../footer/footer.component';
import { CardComponent } from '../card/card.component';
import { HotelCardComponent } from "../hotel-card/hotel-card.component";
import HotelType from '../types/Hotel';

@Component({
  selector: 'app-city-page',
  imports: [HeroComponent, FooterComponent, CardComponent, HotelCardComponent],
  templateUrl: './city-page.component.html',
  styleUrl: './city-page.component.scss'
})

export class CityPageComponent {
    hotel1: HotelType = {
      imageName: "hotel-el-prado-x2",
      title: "Hotel El Prado",
    alt:"Vista de la piscina y arquitectura colonial del emblemático Hotel El Prado en Barranquilla, rodeado de palmeras",
    discount:true,
    };
    hotel2: HotelType = {
      imageName: "hotel-dann-carlton-x2",
      title: "Hotel Dann Carlton",
    alt:"Piscina del Hotel Dann Carlton con tumbonas, jacuzzi y terraza con mesas en una zona moderna",
    discount:false,
    };
     hotel3: HotelType = {
      imageName: "hotel-movich-buro-x2",
      title: "Hotel Movich Buró",
      alt:"Piscina exterior del Hotel Movich Buró Barranquilla al atardecer, junto a un moderno edificio con diseño minimalista",
    discount:false,
    };
}
