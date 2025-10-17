import { Component } from '@angular/core';
import { Producto } from '../../modelos/producto.model';
import { CarritoService } from '../../servicios/carrito.service';
import { FavoritosService } from '../../servicios/favoritos.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-productos',
  imports: [NgIf, NgFor, FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {


  Productos: Producto[] = [
    {
      id: 1,
      nombre: 'nombre',
      descripcion: 'descripcion',
      precio: 100,
      imagen: 'https://i.pinimg.com/736x/87/07/d1/8707d1946063648b575f90f54cd253f6.jpg',
      disponibilidad: true,
      categoria: 'categoria ',
      marca: 'marca',



    }
    ,
    {
      id: 2,
      nombre: 'nombre',
      descripcion: 'descripcion',
      precio: 300,
      imagen: 'https://i.pinimg.com/736x/79/48/4b/79484bb92321908ebdc62188216d19bf.jpg',
      disponibilidad: true,
      categoria: 'categoria ',
      marca: 'marca',


    }
    ,
    {
      id: 3,
      nombre: 'nombre',
      descripcion: 'descripcion',
      precio: 200,
      imagen: 'https://i.pinimg.com/736x/cb/4e/9c/cb4e9c726ef28a1f22023bf4c5e4e776.jpg',
      disponibilidad: true,
      categoria: 'categoria ',
      marca: 'marca',

    }
    ,
    {
      id: 4,
      nombre: 'nombre',
      descripcion: 'descripcion',
      precio: 500,
      imagen: 'https://i.pinimg.com/736x/8b/af/ab/8bafab35b21d759692abad6670c3f6cd.jpg',
      disponibilidad: true,
      categoria: 'categoria ',
      marca: 'marca',


    }
    ,
    {
      id: 5,
      nombre: 'nombre',
      descripcion: 'descripcion',
      precio: 200,
      imagen: 'https://acdn-us.mitiendanube.com/stores/194/047/products/tempsnip-125f012067715da8dc17564011235084-1024-1024.webp',
      disponibilidad: true,
      categoria: 'categoria ',
      marca: 'marca',


    }
    ,
    {
      id: 6,
      nombre: 'nombre',
      descripcion: 'descripcion',
      precio: 400,
      imagen: 'https://www.labskateboarding.com/wp-content/uploads/2018/10/SKATE-JAPON.jpg',
      disponibilidad: true,
      categoria: 'categoria ',
      marca: 'marca',

    },
    {
      id: 7,
      nombre: 'nombre',
      descripcion: 'descripcion',
      precio: 300,
      imagen: 'https://i.pinimg.com/1200x/0b/9f/77/0b9f771d6c34b49eac8dbca062774ab4.jpg',
      disponibilidad: true,
      categoria: 'categoria ',
      marca: 'marca',


    }
    ,
    {
      id: 8,
      nombre: 'nombre',
      descripcion: 'descripcion',
      precio: 200,
      imagen: 'https://i.pinimg.com/736x/5f/d9/36/5fd936e86479c69d0af521f4c655255a.jpg',
      disponibilidad: true,
      categoria: 'urban ',
      marca: 'vans ',


    }

  ]


  // Constructor donde inyectamos los servicios

  constructor(private carritoService: CarritoService, private favoritoService: FavoritosService) { }

  //para agregar un producto al carrito

  agregar(producto: Producto) {
    this.carritoService.agregarAlcarrito(producto)

  }

  agregarAFavoritos(producto: Producto) {
    // Llama al método del servicio para agregar el producto favoritos
    this.favoritoService.agregarAFavoritos(producto);
    // Muestra un mensaje de confirmación al usuario

  }


  searchTerm: string = '';

  selectedCategory: string = '';

  selectedBrand: string = '';

  minprecio: number | null = null

  maxprecio: number | null = null

  get categories(): string[] {
    return [...new Set(this.Productos.map(p => p.categoria))];
  }


  get marcas(): string[] {
    return [...new Set(this.Productos.map(p => p.marca))];
  }

  OnSearch(event: Event): void {
    event.preventDefault();
  }


  resetFilters(): void {
    this.searchTerm = '';

    this.selectedCategory = '';

    this.selectedBrand = '';

    this.minprecio = null;

    this.maxprecio = null;
  }

  get filteredProductos(): Producto[] {
    return this.Productos.filter(p =>
      (this.searchTerm === '' || p.nombre.toLocaleLowerCase().includes(this.searchTerm.toLowerCase())) &&
      (this.selectedCategory === '' || p.categoria === this.selectedCategory) &&
      (this.selectedBrand === '' || p.marca === this.selectedBrand) &&
      (this.minprecio === null || p.precio >= this.minprecio) &&
      (this.maxprecio === null || p.precio >= this.maxprecio)



    )
  }



}
