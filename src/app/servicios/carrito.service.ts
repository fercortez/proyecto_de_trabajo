import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../modelos/producto.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private carritosubject = new BehaviorSubject<{ producto: Producto; cantidad: number }[]>([]);
  carrito$ = this.carritosubject.asObservable();
  agregarAlcarrito(producto: Producto) {
    const productos = this.carritosubject.getValue(); // Obtiene el valor actual del carrito
    const encontrado = productos.find(p => p.producto.id === producto.id);// Busca si el producto ya está en el carrito
    if (encontrado) {
      encontrado.cantidad++;// Si existe, incrementa su cantidad
    } else {
      this.carritosubject.next([...productos, { producto, cantidad: 1 }])// Si no existe, lo agrega al carrito
    }
  }

  eliminarDelCarrito(productoid: number) {
    const productos = this.carritosubject.getValue().filter(p => p.producto.id !== productoid)
    this.carritosubject.next(productos) // Actualiza el carrito sin el producto eliminado
  }

  vaciarCarrito() {
    this.carritosubject.next([])
  }


  //metodo para actualizar la cantidad de un producto en el carrito
  actualizarCantidad(productoId: number, nuevaCantidad: number) {
    //recorremos el carrito y actualizamos la cantidad del producto con el ID dado 
    const productos = this.carritosubject.getValue().map(item => {
      if (item.producto.id === productoId) {
        //retornamos una copia del producto con la nueva cantidad
        return { ...item, cantidad: nuevaCantidad }
      }
      return item;
    })

    //emitimos el nuevo estado del carrito 
    this.carritosubject.next(productos)
  }

  //metodo para obtener los producotos del carrito con un arreglo
 obtenerProductos():{producto:Producto;cantidad:number}[]{
  return this.carritosubject.getValue();
 }

 //metodo para calcular el total a pagar (precio por cantidad de cada producto)
obtenerTotal():number{
  const productos = this.carritosubject.getValue();
  //usamos reduce para sumar los subtotales de cada producto
  return productos.reduce((total,item) => total + item.producto.precio*item.cantidad,0)
}

  

  constructor() { }
}
