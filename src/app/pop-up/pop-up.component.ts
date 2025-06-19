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
  styles = {
    width: '1150px',
    height: '700px',
    border: 'none',
    borderRadius: 0,
  };

  @Input() popUp: PopUp = {
    image: '',
    title: '',
    icon: '',
    content: [],
  };
}
