import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { VisitorInformation } from '../types/VisitorInformation';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'visitor-information',
  imports: [ButtonComponent],
  templateUrl: './visitor-information.component.html',
  styleUrl: './visitor-information.component.scss',
})
export class VisitorInformationComponent {
  @Input() visitorInformation: VisitorInformation = {
    icon: '',
    title: '',
    text: '',
  };
}
