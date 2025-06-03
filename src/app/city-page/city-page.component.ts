import { Component, Input, input } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { FooterComponent } from '../footer/footer.component';
import { CardComponent } from '../card/card.component';
import { HotelCardComponent } from '../hotel-card/hotel-card.component';
import HotelType from '../types/Hotel';
import { TouristSpotsComponent } from '../tourist-spots/tourist-spots.component';
import TouristSpot from '../types/TouristSpot';

@Component({
  selector: 'app-city-page',
  imports: [
    HeroComponent,
    FooterComponent,
    CardComponent,
    HotelCardComponent,
    TouristSpotsComponent,
  ],
  templateUrl: './city-page.component.html',
  styleUrl: './city-page.component.scss',
})
export class CityPageComponent {
  hoteles: HotelType[] = [
    {
      imageName: 'hotel-el-prado-x2',
      title: 'Hotel El Prado',
      alt: 'Vista de la piscina y arquitectura colonial del emblemático Hotel El Prado en Barranquilla, rodeado de palmeras',
      discount: true,
    },
    {
      imageName: 'hotel-dann-carlton-x2',
      title: 'Hotel Dann Carlton',
      alt: 'Piscina del Hotel Dann Carlton con tumbonas, jacuzzi y terraza con mesas en una zona moderna',
      discount: false,
    },
    {
      imageName: 'hotel-movich-buro-x2',
      title: 'Hotel Movich Buró',
      alt: 'Piscina exterior del Hotel Movich Buró Barranquilla al atardecer, junto a un moderno edificio con diseño minimalista',
      discount: false,
    },
  ];
  touristSpots: TouristSpot[] = [
    { imageSpot: 'cienaga-de-mallorquin', name: 'CIÉNAGA DE MALLORQUÍN' },
    { imageSpot: 'museo-del-carnaval', name: 'MUSEO DEL CARNAVAL' },
    { imageSpot: 'malecon-del-rio', name: 'MALECÓN DEL RÍO' },
    { imageSpot: 'muelle-188', name: 'MUELLE 1888' },
    { imageSpot: 'ventana-del-mundo', name: 'VENTANA DEL MUNDO' },
    { imageSpot: 'estatua-de-shakira', name: 'ESTATUA DE SHAKIRA' },
    { imageSpot: 'volcan-del-totumo', name: 'VOLCÁN DEL TOTUMO' },
    { imageSpot: 'puerto-mocho', name: 'PUERTO MOCHO' },
  ];
}
