import { Component, Input } from '@angular/core';
import { PopUp } from '../types/PopUp';

@Component({
  selector: 'pop-up',
  imports: [],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.scss',
})
export class PopUpComponent {
  @Input() popUp: PopUp = {
    title: '',
    icon: '',
    subtitle: '',
    description: '',
  };
}
