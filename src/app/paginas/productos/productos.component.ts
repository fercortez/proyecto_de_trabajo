import { Component } from '@angular/core';
import { Producto } from '../../modelos/producto.model';
import { CarritoService } from '../../servicios/carrito.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-productos',
  imports: [NgIf,NgFor],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos = [
    {
      id: 1,
      nombre: 'producto 1', precio: 100,
      img: 'https://i.pinimg.com/736x/aa/77/a8/aa77a8004cbaf7acfb22fbb61ca44a74.jpg',
    },

    {
      id: 2,
      nombre: 'producto 2', precio: 150,
      img: 'https://i.pinimg.com/736x/8a/eb/31/8aeb31f033ba256a88ae23351efdce4d.jpg',
    },

    {
      id: 3,
      nombre: 'producto 3', precio: 200,
      img: 'https://i.pinimg.com/236x/ba/1f/e6/ba1fe662e2cd1ea9a05bc6cb6033dfa9.jpg',
    },


  ];

  Productos: Producto[] = [
{
    id: 1 ,
    nombre:'imagen',
    descripcion: 'si',
    precio: 2000,
    imagen: '',
    disponibilidad: true 

  }
  ]


  constructor(private carritoService: CarritoService) { }

  //para agregar un producto al carrito

  agregar(producto: Producto) {
    this.carritoService.agregarAlcarrito(producto)
    alert('agregado al carrito')  //muestra el mensaje
  }

}
