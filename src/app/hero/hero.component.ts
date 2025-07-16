import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { LinkComponent } from '../link/link.component';

@Component({
  selector: 'hero',
  imports: [LinkComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  @Input() borderOn: boolean = true;
  @Input() titleText: string = '';
  @Input() subtitle: string = '';
  @Input() buttonDisplay: boolean = false;
  @Input() backgroundImage: string = '';
  @Input() bgRight: boolean = false;
}
