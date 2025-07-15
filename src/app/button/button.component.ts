import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() isDark: boolean = false;
  @Input() onDark: boolean = false;
  @Input() buttonAsLink: boolean = false;
}
