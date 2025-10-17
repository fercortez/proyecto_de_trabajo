import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  productos = [
    {
      id: 1,
      nombre: 'producto 1', precio: 100,
      img: 'https://acdn-us.mitiendanube.com/stores/141/429/products/captura-de-pantalla-2025-07-23-17-22-52-99136f1e65f24263ef17533026258421-1024-1024.webp',
    },

    {
      id: 2,
      nombre: 'producto 2', precio: 150,
      img: 'https://acdn-us.mitiendanube.com/stores/141/429/products/captura-de-pantalla-2025-07-23-17-22-48-7f9c9cb2ec67140d2d17533026263866-1024-1024.webp',
    },

    {
      id: 3,
      nombre: 'producto 3', precio: 200,
      img: 'https://http2.mlstatic.com/D_NQ_NP_2X_639505-MLA78086392441_072024-F.webp',
    },
{
      id: 4,
      nombre: 'producto 1', precio: 100,
      img: 'https://http2.mlstatic.com/D_NQ_NP_2X_843661-MLA77596998624_072024-F.webp',
    }
  ];

  usuario = {
    nombre: 'ari ',
    /*isLoggedIn:true*/
    activo: true
  };





}
