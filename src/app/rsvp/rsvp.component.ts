import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormService } from '../form.service';
import { ButtonComponent } from '../button/button.component';
import { FooterComponent } from '../footer/footer.component';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-rsvp',
  imports: [
    ButtonComponent,
    FooterComponent,
    ReactiveFormsModule,
    IconComponent,
  ],
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.scss',
})
export class RsvpComponent {
  @ViewChild('sheet') sheet!: ElementRef;

  formulario: FormGroup;
  done = false;
  loading = false;
  error = false;

  constructor(private fb: FormBuilder, private formService: FormService) {
    this.formulario = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      attend: ['', Validators.required],
    });
  }

  scrollToSheet() {
    this.sheet.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  onclick() {
    this.error = false;
  }

  onSubmit() {
    if (this.formulario.invalid) {
      alert('Por favor completa todos los campos requeridos correctamente');
      return; // Sale sin enviar el formulario
    }

    this.loading = true;

    this.scrollToSheet();

    setTimeout(() => {
      this.loading = false;
      this.done = true;
    }, 2000);
  }
}
