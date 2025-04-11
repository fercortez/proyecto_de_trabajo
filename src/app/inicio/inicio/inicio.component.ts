import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  imports: [NgFor,NgIf,NgClass,],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
    /*productos =[
      { nombre: 'producto 1', precio: 100},
      { nombre: 'producto 2', precio: 150},
      { nombre: 'producto 3', precio: 200}
    ];*/
   
    usuario = {
      nombre: 'ari',
      /*isLoggedIn:true*/
      activo: true
    };





}
