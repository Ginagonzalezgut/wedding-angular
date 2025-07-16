import { Component } from '@angular/core';
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
  formulario: FormGroup;
  done = false;
  loading = false;
  error = true;

  constructor(private fb: FormBuilder, private formService: FormService) {
    this.formulario = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      attend: ['', Validators.required],
    });
  }

  onclick() {
    this.error = false;
  }

  onSubmit() {
    if (this.formulario.invalid) {
      // Puedes marcar todos los campos como "touched" para que se muestren los errores
      this.formulario.markAllAsTouched();
      alert('Por favor completa todos los campos requeridos correctamente');
      return; // Sale sin enviar el formulario
    }

    const datos = this.formulario.value;

    this.loading = true;

    this.formService.enviarFormulario(datos).subscribe({
      next: () => {
        this.loading = false;
        this.done = true;
      },
      error: (err) => {
        console.error('Error al enviar', err);
        this.loading = false;
        this.error = true;
      },
    });
  }
}
