import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../servicios/carrito.service';
import { Producto } from '../../modelos/producto.model';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  imports: [NgFor, NgIf],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {
  productoEnCarrito: { producto: Producto; cantidad: number }[] = [];
  constructor(private carritoService: CarritoService, private router: Router) { }

  ngOnInit(): void {
    this.carritoService.carrito$.subscribe((productos) => {

      this.productoEnCarrito = productos
    })
  };

  agregarCantidad(index: number) {
    this.productoEnCarrito[index].cantidad++;
  }

  quitarCantidad(index: number) {
    if (this.productoEnCarrito[index].cantidad > 1) {
      this.productoEnCarrito[index].cantidad--;
    }
  }

  eliminarProducto(productoid: number) {
    this.carritoService.eliminarDelCarrito(productoid)
  }

  vaciarCarrito() {
    this.carritoService.vaciarCarrito();
  }

  // realizarCompra() {
  //   alert('compra realizada con exito!')
  //   this.vaciarCarrito();
  // }

  irAFormularioCompra() {
    this.router.navigate(['/compra']);
  }



  calcularTotal(): number {

    return this.productoEnCarrito.reduce((total, item) => {
      return total + item.producto.precio * item.cantidad
    }, 0)
  }

}
