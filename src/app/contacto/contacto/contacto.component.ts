import { Component } from '@angular/core';
import {FormGroup,FormControl, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [FormsModule],
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
