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
  @Input() title:string = "";
  @Input() buttonLabel:string="";
  @Input() icon:string="";
  @Input() compact: boolean=false;
}
