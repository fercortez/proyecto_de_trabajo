import { Component } from '@angular/core';
import { Producto } from '../../modelos/producto.model';
import { CarritoService } from '../../servicios/carrito.service';
import { FavoritosService } from '../../servicios/favoritos.service';
import { NgFor, NgIf } from '@angular/common';



@Component({
  selector: 'app-productos',
  imports: [NgIf, NgFor],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos = [
   

  ];

  Productos: Producto[] = [
    {
      id: 1,
      nombre: 'nombre',
      descripcion: 'descripcion',
      precio: 100,
      imagen: 'https://i.pinimg.com/736x/87/07/d1/8707d1946063648b575f90f54cd253f6.jpg',
      disponibilidad: true

    }
    ,
    {
      id: 2,
      nombre: 'nombre',
      descripcion: 'descripcion',
      precio: 200,
      imagen: 'https://i.pinimg.com/736x/79/48/4b/79484bb92321908ebdc62188216d19bf.jpg',
      disponibilidad: true

    }
    ,
    {
      id: 3,
      nombre: 'nombre',
      descripcion: 'descripcion',
      precio: 200,
      imagen: 'https://i.pinimg.com/736x/cb/4e/9c/cb4e9c726ef28a1f22023bf4c5e4e776.jpg',
      disponibilidad: true
    }
    ,
 {
      id: 4,
      nombre: 'nombre',
      descripcion: 'descripcion',
      precio: 200,
      imagen: 'https://i.pinimg.com/736x/8b/af/ab/8bafab35b21d759692abad6670c3f6cd.jpg',
      disponibilidad: true

    }
    ,
    {
      id: 5,
      nombre: 'nombre',
      descripcion: 'descripcion',
      precio: 200,
      imagen: 'https://admin.drifters.com.ar/uploads/product_image/32757/DriftersPDP_DCPAPPSCGU-1000_Shot1.jpg',
      disponibilidad: true

    }
    ,
    {
      id: 6,
      nombre: 'nombre',
      descripcion: 'descripcion',
      precio: 200,
      imagen: 'https://admin.drifters.com.ar/uploads/product_image/27609/360w_DriftersPDP_SK10002793_Shot1.jpg',
      disponibilidad: true
    },
    {
      id: 7,
      nombre: 'nombre',
      descripcion: 'descripcion',
      precio: 200,
      imagen: 'https://i.pinimg.com/1200x/0b/9f/77/0b9f771d6c34b49eac8dbca062774ab4.jpg',
      disponibilidad: true

    }
    ,
    {
      id: 8,
      nombre: 'nombre',
      descripcion: 'descripcion',
      precio: 200,
      imagen: 'https://i.pinimg.com/736x/5f/d9/36/5fd936e86479c69d0af521f4c655255a.jpg',
      disponibilidad: true

    }

  ]


  // Constructor donde inyectamos los servicios

  constructor(private carritoService: CarritoService,private favoritoService: FavoritosService) {}

  //para agregar un producto al carrito

  agregar(producto: Producto) {
    this.carritoService.agregarAlcarrito(producto)

  }
  
agregarAFavoritos(producto: Producto) {
    // Llama al método del servicio para agregar el producto favoritos
  this.favoritoService.agregarAFavoritos(producto);
    // Muestra un mensaje de confirmación al usuario

}

  

}
