import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component/home.component';
import { ProductosComponent } from './components/productos.component/productos.component';
import { PadreNumerosDoblesComponent } from './components/padre-numeros-dobles-component/padre-numeros-dobles-component';
import { PadreCochesComponent } from './components/padre-coches-component/padre-coches-component';

const routes: Routes = [
  {path: "", component: HomeComponent}, 
  {path: "modelos", component: ProductosComponent},
  { path: "padredobles", component: PadreNumerosDoblesComponent},
  { path: "padrecoches", component: PadreCochesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
