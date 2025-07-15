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

@Component({
  selector: 'app-rsvp',
  imports: [ButtonComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.scss',
})
export class RsvpComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder, private formService: FormService) {
    this.formulario = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      attend: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.formulario.invalid) {
      // Puedes marcar todos los campos como "touched" para que se muestren los errores
      this.formulario.markAllAsTouched();
      alert('Por favor completa todos los campos requeridos correctamente');
      return; // Sale sin enviar el formulario
    }

    const datos = this.formulario.value;
    this.formService.enviarFormulario(datos).subscribe({
      next: () => {
        alert('Formulario enviado correctamente');
        this.formulario.reset();
      },
      error: (err) => {
        console.error('Error al enviar', err);
        alert('Hubo un error al enviar el formulario');
      },
    });
  }
}
