import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'hotel-card',
  imports: [ButtonComponent],
  templateUrl: './hotel-card.component.html',
  styleUrl: './hotel-card.component.scss'
})
export class HotelCardComponent {
@Input() title="";
@Input() imageName="";
@Input() alt="";
@Input() discount=false;
}
