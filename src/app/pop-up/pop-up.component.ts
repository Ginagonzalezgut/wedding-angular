import { Component, Input } from '@angular/core';
import { PopUp } from '../types/PopUp';
import { IconComponent } from '../icon/icon.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'pop-up',
  imports: [IconComponent, DialogModule, ButtonComponent],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.scss',
})
export class PopUpComponent {
  visible = false;

  @Input() popUp: PopUp = {
    image: '',
    title: '',
    icon: '',
    content: [],
  };

  @Input() buttonLabel: string = 'Más información';
  @Input() buttonAsLink: boolean = false;

  styles = {
    maxWidth: this.popUp?.image ? '1150px' : '1000px',
    width: '90%',
    height: '700px',
    border: 'none',
    borderRadius: 0,
  };
}
