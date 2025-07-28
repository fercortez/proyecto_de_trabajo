


import { Component } from '@angular/core';
import { Producto } from '../../modelos/producto.model';
import { CarritoService } from '../../servicios/carrito.service';
import { FavoritosService } from '../../servicios/favoritos.service';
import { NgFor, NgIf } from '@angular/common';



@Component({
   selector: 'app-ofertas',
  imports: [NgIf, NgFor],
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.css'
})
export class  OfertasComponent {
  productos = [
   

  ];

  Productos: Producto[] = [
    
    {
      id: 1,
      nombre: 'nombre',
      descripcion: 'descripcion',
      precio: 140,
      imagen: 'https://i.pinimg.com/1200x/0b/9f/77/0b9f771d6c34b49eac8dbca062774ab4.jpg',
      disponibilidad: true

    },
     {
      id: 2,
      nombre: 'nombre',
      descripcion: 'descripcion',
      precio: 140,
      imagen: 'https://www.labskateboarding.com/wp-content/uploads/2021/07/CIENTI%CC%81FICO-WEB-LQ-SOLO-DECK.jpg',
      disponibilidad: true

    },

     {
      id: 3,
      nombre: 'nombre',
      descripcion: 'descripcion',
      precio: 140,
      imagen: 'https://acdn-us.mitiendanube.com/stores/768/324/products/drifterspdp_woodootablasandro-1-849de7c9b97237e8d017503386406847-1024-1024.jpg',
      disponibilidad: true

    }
    ,
     {
      id: 4,
      nombre: 'nombre',
      descripcion: 'descripcion',
      precio: 140,
      imagen: 'https://acdn-us.mitiendanube.com/stores/001/164/761/products/deck_fake05-8d4f82cad8510ff14d17507993406385-480-0.jpg',
      disponibilidad: true

    },
     {
      id: 5,
      nombre: 'nombre',
      descripcion: 'descripcion',
      precio: 140,
      imagen: 'https://cdnx.jumpseller.com/life-boardshop/image/49062381/resize/400/400?1716499742',
      disponibilidad: true

    },

     {
      id: 6,
      nombre: 'nombre',
      descripcion: 'descripcion',
      precio: 140,
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeW89UgxcRJx0qrm_HzZr4-TfXterPXd-FQA&s',
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