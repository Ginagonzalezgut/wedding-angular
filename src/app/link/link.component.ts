import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  imports: [],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
})
export class LinkComponent {
  @Input() isDark: boolean = false;
  @Input() onDark: boolean = false;
  @Input() href: string = '';
}
