import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'card',
  imports: [ButtonComponent,IconComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() title = "";
  @Input() buttonLabel="";
  @Input() icon="";
}
