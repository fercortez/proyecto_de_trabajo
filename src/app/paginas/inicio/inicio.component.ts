import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  imports: [NgFor,NgIf,NgClass,],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
    productos =[
      { 
        id: 1,
        nombre: 'producto 1', precio: 100,
        img:'https://i.pinimg.com/736x/aa/77/a8/aa77a8004cbaf7acfb22fbb61ca44a74.jpg',
      },

      { 
        id: 2,
        nombre: 'producto 2', precio: 150,
        img:'https://i.pinimg.com/736x/8a/eb/31/8aeb31f033ba256a88ae23351efdce4d.jpg',
      },

      { 
        id: 3,
        nombre: 'producto 3', precio: 200,
        img:'https://i.pinimg.com/236x/ba/1f/e6/ba1fe662e2cd1ea9a05bc6cb6033dfa9.jpg',
      },

  
    ];
   
    usuario = {
      nombre: 'ari',
      /*isLoggedIn:true*/
      activo: true
    };





}
