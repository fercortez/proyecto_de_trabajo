import { Component } from '@angular/core';
import {FormGroup,FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule,FormsModule],
  standalone: true,
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
/*
  usuario={
    nombre: ''
  };
*/

  miFormulario = new FormGroup({
    email: new FormControl('')
  });
}
