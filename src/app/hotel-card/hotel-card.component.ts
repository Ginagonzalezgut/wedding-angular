import { Component, Input } from '@angular/core';
import { HotelType } from '../types/Hotel';
import { LinkComponent } from '../link/link.component';

@Component({
  selector: 'hotel-card',
  imports: [LinkComponent],
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
}
