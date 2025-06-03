import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import HotelType from '../types/Hotel';

@Component({
  selector: 'hotel-card',
  imports: [ButtonComponent],
  templateUrl: './hotel-card.component.html',
  styleUrl: './hotel-card.component.scss'
})
export class HotelCardComponent {
@Input() hotel: HotelType = {
  title:"",
  imageName:"",
  alt:"",
  discount:false,
};
}
