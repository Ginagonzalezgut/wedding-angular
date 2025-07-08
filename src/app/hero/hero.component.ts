import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'hero',
  imports: [ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  @Input() borderOn: boolean = true;
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() buttonDisplay: boolean = false;
  @Input() backgroundImage: string = '';
  @Input() bgRight: boolean = false;
}
