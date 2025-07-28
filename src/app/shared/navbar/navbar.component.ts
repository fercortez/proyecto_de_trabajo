import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../../servicios/carrito.service';
import { Producto } from '../../modelos/producto.model';
import { NgIf } from '@angular/common';
import { FavoritosService } from '../../servicios/favoritos.service';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  cantidadProductosEnCarrito: number = 0;
  cantidadProductosEnFavoritos: number = 0;
  constructor(private carritoService: CarritoService, private favoritosService: FavoritosService) { }

  ngOnInit(): void {
    //escucha los cambios en el carrrito para actuializar la casnbtidad total de productos
    this.carritoService.carrito$.subscribe((productos: { producto: Producto, cantidad: number }[]) => {
      this.cantidadProductosEnCarrito = productos.reduce((total, item) => total + item.cantidad, 0) //suma la cantidada de productos
    })
    // this.favoritosService.favoritos$.subscribe((productos:[Producto]) => {
    //   this.cantidadProductosEnFavoritos = reduce((total, item) => total + item.cantidad, 0) //suma la cantidada de productos
    // })
    this.favoritosService.favoritos$.subscribe((productos) => {
      // this.cantidadProductosEnFavoritos = productos.in
      this.cantidadProductosEnFavoritos = productos.reduce((total) => total + 1, 0);
    })
  }
  onCarritoclick() {
    console.log('carrito clicked');
  }
}
