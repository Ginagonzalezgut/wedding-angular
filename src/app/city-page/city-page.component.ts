import { Component } from '@angular/core';
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
import { LinkComponent } from '../link/link.component';

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
    LinkComponent,
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
      url: 'https://www.hotelelpradobarranquilla.com/',
    },
    {
      imageName: 'hotel-dann-carlton-x2',
      title: 'Hotel Dann Carlton',
      alt: 'Piscina del Hotel Dann Carlton con tumbonas, jacuzzi y terraza con mesas en una zona moderna',
      discount: false,
      url: 'https://www.danncarltonbaq.co/',
    },
    {
      imageName: 'hotel-movich-buro-x2',
      title: 'Hotel Movich Buró',
      alt: 'Piscina exterior del Hotel Movich Buró Barranquilla al atardecer, junto a un moderno edificio con diseño minimalista',
      discount: false,
      url: 'https://www.movichhotels.com/es/hotel-buro51-en-barranquilla/',
    },
  ];
  touristSpots: TouristSpot[] = [
    {
      imageSpot: 'cienaga-de-mallorquin',
      name: 'CIÉNAGA DE MALLORQUÍN',
      url: 'https://ecoturismocienagademallorquin.com/?gad_source=1&gad_campaignid=20185354708&gbraid=0AAAAApDG6CDoQuZ-MrtfmSpfe2xUIOSf_&gclid=Cj0KCQjw-NfDBhDyARIsAD-ILeDD-rH7jwC3ykxwAT05eB0ZAmOtDWNoV8SUc7d3fu0qKrckYPNQ8tYaAqSsEALw_wcB',
    },
    {
      imageSpot: 'museo-del-carnaval',
      name: 'MUSEO DEL CARNAVAL',
      url: 'https://museocarnavaldebarranquilla.org/',
    },
    {
      imageSpot: 'malecon-del-rio',
      name: 'MALECÓN DEL RÍO',
      url: 'https://granmalecon.com/',
    },
    {
      imageSpot: 'muelle-1888',
      name: 'MUELLE 1888',
      url: 'https://www.instagram.com/Muelle1888/?locale=es_us&hl=en',
    },
    {
      imageSpot: 'ventana-del-mundo',
      name: 'VENTANA DEL MUNDO',
      url: 'https://www.instagram.com/_ventanaalmundo/?hl=es',
    },
    {
      imageSpot: 'estatua-de-shakira',
      name: 'ESTATUA DE SHAKIRA',
      url: 'https://es.wikipedia.org/wiki/Estatua_de_Shakira',
    },
    {
      imageSpot: 'volcan-del-totumo',
      name: 'VOLCÁN DEL TOTUMO',
      url: 'https://www.civitatis.com/es/cartagena-de-indias/excursion-volcan-totumo/?srsltid=AfmBOooRcpxoJ_akksb91E1BZ39mKMcZ3baD02NquTUdGXyElQQMqKCv',
    },
    {
      imageSpot: 'puerto-mocho',
      name: 'PUERTO MOCHO',
      url: 'https://www.instagram.com/playapuertomocho/?hl=es',
    },
  ];
  visitorsInformation: VisitorInformation[] = [
    {
      icon: 'transportation',
      title: 'TRANSPORTE',
      text: 'Barranquilla cuenta con un Sistema Integrado de Transporte.',
      popup: {
        image: 'transporte-2',
        title: 'TRANSPORTE',
        icon: 'transportation',
        content: [
          {
            subtitle: 'Transmetro',
            description: [
              'Es el sistema de transporte público masivo de buses articulados.',
              'Ideal para moverse durante el día por zonas conocidas.',
              'Necesitas una tajeta recargable.',
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
      popup: {
        image: 'food',
        title: 'PLATOS TÍPICOS',
        icon: 'dish',
        content: [
          {
            subtitle: 'Mote de queso',
            description: [
              'Sopa espesa y cremosa hecha con ñame, queso costeño y suero. Tradicional y reconfortante.',
            ],
          },
          {
            subtitle: 'Butifarra Soledeña',
            description: [
              'Delicioso embutido pequeño, seco y especiado, originario del municipio vecino de Soledad.',
            ],
          },
          {
            subtitle: 'Arepa de huevo',
            description: [
              'Arepa dorada y crujiente, rellena con huevo y, a veces, carne molida. Ideal como desayuno o snack callejero.',
            ],
          },
          {
            subtitle: 'Bollo limpio o bollo de yuca/mazorca',
            description: [
              'Masa de maíz o yuca cocida en hoja, un acompañante típico en platos costeños.',
            ],
          },
          {
            subtitle: 'Sancocho de guandú con carne salada',
            description: [
              'Caldo espeso preparado con guandú (legumbre), carne salada, plátano y yuca.',
            ],
          },
          {
            subtitle: 'Carimañola',
            description: [
              'Fritura hecha de masa de yuca rellena de carne molida o queso. Crujiente por fuera y suave por dentro.',
            ],
          },
          {
            subtitle: 'Chicharrón con yuca',
            description: [
              'Tiras de cerdo fritas, crocantes y sabrosas, servidas con yuca cocida o frita.',
            ],
          },
          {
            subtitle: 'Pescado frito acompañada de arroz con coco y patacones',
            description: ['Pargo o mojarra, típico en la costa Caribe.'],
          },
        ],
      },
    },
    {
      icon: 'money',
      title: 'MONEDA',
      text: 'La moneda oficial de Colombia es el peso colombiano (COP).',
      popup: {
        image: 'moneda',
        title: 'MONEDA',
        icon: 'money',
        content: [
          {
            subtitle: 'Lleva efectivo en pesos colombianos',
            description: [
              'En la mayoría de pequeños comercios, puestos callejeros, taxis y tiendas locales solo se acepta efectivo.',
            ],
          },
          {
            subtitle: 'Tarjetas sí, pero no en todas partes',
            description: [
              'Las tarjetas de crédito y débito son aceptadas principalmente en hoteles, centros comerciales, supermercados y restaurantes de cadena. ',
              'Lugares más pequeños o informales pueden no tener datáfono (máquina para tarjetas).',
            ],
          },
          {
            subtitle: 'Cambia dinero en casas de cambio confiables',
            description: [
              'Evita cambiar en la calle o con personas no autorizadas.',
              'También puedes retirar pesos desde cajeros automáticos con tu tarjeta internacional, aunque puede aplicarse una comisión.',
            ],
          },
          {
            subtitle: 'Confirma precios antes de pagar',
            description: [
              'Especialmente en taxis, mercados o comercios sin precios visibles. Pregunta cuánto cuesta antes de consumir o comprar.',
            ],
          },
        ],
      },
    },
    {
      icon: 'wheather',
      title: 'CLIMA',
      text: 'Barranquilla tiene una temperatura promedio de 27,4 °C.',
      popup: {
        image: 'clima',
        title: 'clima',
        icon: 'wheather',
        content: [
          {
            subtitle: 'Prepárate para el calor y la humedad',
            description: [
              'Las temperaturas suelen oscilar entre 28°C y 35°C, con alta humedad.',
              'Viste ropa ligera, de colores claros y telas transpirables como algodón o lino.',
            ],
          },
          {
            subtitle: 'Usa protector solar todos los días',
            description: [
              'El sol es fuerte, incluso en días nublados.',
              'Lleva gafas de sol, gorra o sombrero y protector solar de SPF 30 o más.',
            ],
          },
          {
            subtitle: 'Mantente hidratado',
            description: [
              'Lleva siempre una botella de agua, sobre todo si vas a hacer turismo al aire libre.',
            ],
          },
          {
            subtitle: 'El aire acondicionado es común, pero puede ser fuerte',
            description: [
              'En hoteles, centros comerciales y transporte suele haber aire muy frío. ',
            ],
          },
          {
            subtitle: 'Evita las horas de más calor (12:00 a 15:00)',
            description: [
              'Si puedes, programa actividades al aire libre por la mañana temprano o al final de la tarde.',
            ],
          },
        ],
      },
    },
    {
      icon: 'suitcase',
      title: 'DESTINOS CERCANOS',
      text: 'Cartagena, Santa Marta, Parque Tayrona, entre otros.',
      popup: {
        image: 'destinos-cercanos',
        title: 'destinos cercanos',
        icon: 'suitcase',
        content: [
          {
            subtitle: 'Cartagena de Indias',
            description: [
              'Qué ver: Ciudad amurallada, Getsemaní, playas urbanas, castillo San Felipe.',
              'Ideal para: Turismo cultural, compras, gastronomía, historia y vida nocturna.',
              'Consejo: Puedes ir y volver en el día, pero lo ideal es quedarse al menos una noche. ',
            ],
          },
          {
            subtitle: ' Islas del Rosario',
            description: [
              'Qué ver: Archipiélago con playas de agua cristalina, arrecifes de coral.',
              'Ideal para: Snorkel, relax, excursiones de un día o dormir en una isla.',
              'Consejo: Puedes tomar un tour desde Cartagena que incluya transporte, almuerzo y actividades acuáticas. Las islas más visitadas son Isla Barú, Isla Grande, Isla del Encanto y Cholón.',
            ],
          },
          {
            subtitle: ' Santa Marta y Parque Tayrona',
            description: [
              'Qué ver: Bahía Concha, Playa Cristal, Cabo San Juan (dentro del Parque).',
              'Ideal para: Naturaleza, senderismo, playas paradisíacas.',
              'Consejo: Lleva calzado cómodo y reserva entrada si vas al Tayrona.',
            ],
          },
        ],
      },
    },
    {
      icon: 'segurity',
      title: 'SEGURIDAD',
      text: 'Con unas cuantas precauciones básicas podrás disfrutar al máximo de la ciudad.',
      popup: {
        image: 'seguridad',
        title: 'seguridad',
        icon: 'segurity',
        content: [
          {
            subtitle: 'Evita zonas poco concurridas de noche',
            description: [
              ' Aunque muchas zonas son seguras, es mejor no caminar solo por calles solas o poco iluminadas, especialmente en barrios no turísticos.',
            ],
          },
          {
            subtitle: 'Usa transporte confiable',
            description: [
              ' Prefiere taxis solicitados por apps (como DiDi o InDriver) o desde el hotel. Evita tomar taxis en la calle.',
            ],
          },
          {
            subtitle: 'Lleva solo lo necesario',
            description: [
              ' No cargues grandes cantidades de dinero ni objetos de valor (joyas, cámaras costosas, etc.) al salir. Usa una riñonera o bolso cruzado seguro.',
            ],
          },
          {
            subtitle: 'Consulta con los locales o el hotel',
            description: [
              ' Pregunta en tu alojamiento qué zonas son seguras para visitar y si hay sectores que deberías evitar. ',
            ],
          },
          {
            subtitle: 'Evita mostrar tu móvil en la calle constantemente',
            description: [
              ' Aunque común en muchas ciudades, es mejor usarlo con discreción para evitar robos.',
            ],
          },
        ],
      },
    },
  ];
  responsiveOptions = [
    {
      breakpoint: '992px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
}
