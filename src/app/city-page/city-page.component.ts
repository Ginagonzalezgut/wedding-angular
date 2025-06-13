import { Component, Input, input } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { FooterComponent } from '../footer/footer.component';
import { CardComponent } from '../card/card.component';
import { HotelCardComponent } from '../hotel-card/hotel-card.component';
import { TouristSpotsComponent } from '../tourist-spots/tourist-spots.component';
import { IconComponent } from '../icon/icon.component';
import { VisitorInformationComponent } from '../visitor-information/visitor-information.component';
import { HotelType } from '../types/Hotel';
import { TouristSpot } from '../types/TouristSpot';
import { VisitorInformation } from '../types/VisitorInformation';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-city-page',
  imports: [
    HeroComponent,
    FooterComponent,
    CardComponent,
    HotelCardComponent,
    TouristSpotsComponent,
    IconComponent,
    VisitorInformationComponent,
    CarouselModule,
    DialogModule,
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
    { imageSpot: 'muelle-1888', name: 'MUELLE 1888' },
    { imageSpot: 'ventana-del-mundo', name: 'VENTANA DEL MUNDO' },
    { imageSpot: 'estatua-de-shakira', name: 'ESTATUA DE SHAKIRA' },
    { imageSpot: 'volcan-del-totumo', name: 'VOLCÁN DEL TOTUMO' },
    { imageSpot: 'puerto-mocho', name: 'PUERTO MOCHO' },
  ];
  visitorsInformation: VisitorInformation[] = [
    {
      icon: 'transportation',
      title: 'TRANSPORTE',
      text: 'Barranquilla cuenta con un Sistema Integrado de Transporte.',
      popup: {
        image: 'empanadas',
        title: 'TRANSPORTE',
        icon: 'transportation',
        content: [
          {
            subtitle: 'Transmetro',
            description: [
              'Es el sistema de transporte público masivo de buses articulados.',
              'Ideal para moverse durante el día por zonas conocidas.',
              'Necesitas una tajeta recargable llamada “TuLLave”.',
            ],
          },
          {
            subtitle: 'Taxis',
            description: [
              'No tienen taxímetro, por lo que debes acordar el precio antes de subirte. ',
              'Solo aceptan efectivo.',
              'Pregunta en el hotel o a un local confiable cuánto debería costar un trayecto, para evitar cobros exagerados.',
            ],
          },
          {
            subtitle: 'Apps de transporte',
            description: [
              'Puedes usar Uber, InDriver y DiDi.',
              'A menudo más baratas que los taxis.',
              'Te permite ver el precio con atelación.',
            ],
          },
        ],
      },
    },
    {
      icon: 'dish',
      title: 'PLATOS TÍPICOS',
      text: 'Una amplia oferta gastronómica que refleja la diversidad cultural de la ciudad.',
    },
    {
      icon: 'money',
      title: 'MONEDA',
      text: 'La moneda oficial de Colombia es el peso colombiano (COP).',
    },
    {
      icon: 'wheather',
      title: 'CLIMA',
      text: 'Barranquilla tiene una temperatura promedio de 27,4 °C.',
    },
    {
      icon: 'suitcase',
      title: 'DESTINOS CERCANOS',
      text: 'Cartagena, Santa Marta, Parque Tayrona, entre otros.',
    },
    {
      icon: 'segurity',
      title: 'SEGURIDAD',
      text: 'Con unas cuantas precauciones básicas podrás disfrutar al máximo de la ciudad.',
    },
  ];
}
