import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'hero',
  imports: [ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
@Input() borderOn = true;
@Input() title = "";
@Input() subtitle = "";
@Input() buttonDisplay=false;
@Input() backgroundImage="";
}
