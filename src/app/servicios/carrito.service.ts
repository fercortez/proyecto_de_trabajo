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
    const productos = this.carritosubject.getValue();
    const encontrado = productos.find(p => p.producto.id === producto.id);
    if (encontrado) {
      encontrado.cantidad++;
    } else {
      this.carritosubject.next([...productos, { producto, cantidad: 1 }])
    }
  }

eliminarDelCarrito(productoid:number){
  const productos = this.carritosubject.getValue().filter(p => p.producto.id !== productoid)
  this.carritosubject.next(productos)
}

vaciarCarrito(){
  this.carritosubject.next([])
}



  constructor() { }
}
