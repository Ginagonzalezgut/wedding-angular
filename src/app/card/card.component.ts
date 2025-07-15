import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { LinkComponent } from '../link/link.component';

@Component({
  selector: 'card',
  imports: [LinkComponent, IconComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() titleText: string = '';
  @Input() buttonLabel: string = '';
  @Input() icon: string = '';
  @Input() compact: boolean = false;
  @Input() href: string = '';
}
