import { Component, Input } from '@angular/core';
import { HotelType } from '../types/Hotel';
import { LinkComponent } from '../link/link.component';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { PopUp } from '../types/PopUp';

@Component({
  selector: 'hotel-card',
  imports: [LinkComponent, PopUpComponent],
  templateUrl: './hotel-card.component.html',
  styleUrl: './hotel-card.component.scss',
})
export class HotelCardComponent {
  @Input() hotel: HotelType = {
    title: '',
    imageName: '',
    alt: '',
    discount: false,
    url: '',
  };

  discountPopup: PopUp = {
    image: '',
    title: 'DESCUENTO EXCLUSIVO PARA NUESTROS INVITADOS',
    icon: 'discount',
    content: [
      {
        subtitle: '',
        description: [
          'Aplicar código de descuento #5223.',
          'Válido solo para reservas con fechas entre el 1 y el 4 de julio de 2026.',
          'Tarifa no reembolsable, incluye desayuno buffet.',
          'Válida para 1 o 2 personas. Máx. 1 adulto adicional ($90.000 COP + IVA)',
          'Hasta 2 niños gratis (menores de 12 años)',
        ],
      },
    ],
  };
}
