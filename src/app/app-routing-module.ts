import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component/home.component';
import { ProductosComponent } from './components/productos.component/productos.component';
import { PadreNumerosDoblesComponent } from './components/padre-numeros-dobles-component/padre-numeros-dobles-component';
import { PadreCochesComponent } from './components/padre-coches-component/padre-coches-component';
import { PadreDeportesComponent } from './components/padre-deportes-component/padre-deportes-component';
import { PadreNumerosComponent } from './components/padre-numeros-component/padre-numeros-component';
import { LibreriaComponent } from './components/libreria-component/libreria-component';
import { LecturafilesComponent } from './components/lecturafiles-component/lecturafiles-component';
import { LecturaExcelComponent } from './components/lectura-excel-component/lectura-excel-component';
import { UploadFilesComponent } from './components/upload-files-component/upload-files-component';

const routes: Routes = [
  {path: "", component: HomeComponent}, 
  {path: "modelos", component: ProductosComponent},
  { path: "padredobles", component: PadreNumerosDoblesComponent},
  { path: "padrecoches", component: PadreCochesComponent},
  { path: "padredeportes", component: PadreDeportesComponent},
  { path: "padrenumeros", component: PadreNumerosComponent},
  { path: "libreriacomics", component: LibreriaComponent},
  { path: "lecturafiles", component: LecturafilesComponent},
  { path: "lecturaexcel", component: LecturaExcelComponent},
  { path: "uploadfiles", component: UploadFilesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
