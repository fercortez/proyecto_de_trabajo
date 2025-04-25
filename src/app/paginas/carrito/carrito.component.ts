import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../servicios/carrito.service';
import { Producto } from '../../modelos/producto.model';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-carrito',
  imports: [NgFor,NgIf],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {
  productoEncarrito:{producto: Producto; cantidad: number}[] = [];
  constructor(private carritoService : CarritoService) {}
 
ngOnInit(): void {
  this.carritoService.carrito$.subscribe((productos) =>  {

    this.productoEncarrito = productos
  })
};

agregarCantidad(index: number){
  this.productoEncarrito[index].cantidad++;
}

quitarCantidad(index: number){
  if(this.productoEncarrito[index].cantidad > 1){
    this.productoEncarrito[index].cantidad--;
  }
}

eliminarProducto(productoid:number){
  this.carritoService.eliminarDelCarrito(productoid)
}

vaciarCarrito(){
  this.carritoService.vaciarCarrito();
}

realizarCompra(){
  alert('compra realizada con exito!')
  this.vaciarCarrito();
}

}
