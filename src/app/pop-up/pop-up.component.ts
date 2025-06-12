import { Component, Input } from '@angular/core';
import { PopUp } from '../types/PopUp';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'pop-up',
  imports: [IconComponent],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.scss',
})
export class PopUpComponent {
  @Input() popUp: PopUp = {
    image: '',
    title: '',
    icon: '',
    content: [],
  };
}
