import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { OfertasComponent } from './paginas/ofertas/ofertas.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';
import { CarritoComponent } from './paginas/carrito/carrito.component';

export const routes: Routes = [

    {path:'', redirectTo: '/inicio',pathMatch: 'full'},
    {path: 'inicio',component: InicioComponent},
    {path: 'contacto',component: ContactoComponent},
    {path: 'productos',component: ProductosComponent},
    {path: 'ofertas',component: OfertasComponent},
    {path: 'nosotros',component: NosotrosComponent},
    {path: 'carrito',component: CarritoComponent}
];
