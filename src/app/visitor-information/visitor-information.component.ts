import { Component, Input } from '@angular/core';
import { VisitorInformation } from '../types/VisitorInformation';
import { IconComponent } from '../icon/icon.component';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'visitor-information',
  imports: [IconComponent, PopUpComponent],
  templateUrl: './visitor-information.component.html',
  styleUrl: './visitor-information.component.scss',
})
export class VisitorInformationComponent {
  isPopupOpen = false;

  @Input() visitorInformation: VisitorInformation = {
    icon: '',
    title: '',
    text: '',
    popup: {
      content: [],
      icon: '',
      image: '',
      title: '',
    },
  };
}
