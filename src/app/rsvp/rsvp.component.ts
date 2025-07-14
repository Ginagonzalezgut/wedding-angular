import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-rsvp',
  imports: [ButtonComponent, FooterComponent],
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.scss',
})
export class RsvpComponent {}
