import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProductosComponent } from './components/productos.component/productos.component';
import { HomeComponent } from './components/home.component/home.component';
import { MenuComponent } from './components/menu.component/menu.component';
import { PadreNumerosDoblesComponent } from './components/padre-numeros-dobles-component/padre-numeros-dobles-component';
import { HijoDoblesComponent } from './components/hijo-dobles-component/hijo-dobles-component';
import { PadreCochesComponent } from './components/padre-coches-component/padre-coches-component';
import { HijoCocheComponent } from './components/hijo-coche-component/hijo-coche-component';
import { PadreDeportesComponent } from './components/padre-deportes-component/padre-deportes-component';
import { HijoDeporteComponent } from './components/hijo-deporte-component/hijo-deporte-component';
import { PadreNumerosComponent } from './components/padre-numeros-component/padre-numeros-component';
import { HijoNumeroComponent } from './components/hijo-numero-component/hijo-numero-component';
import { LibreriaComponent } from './components/libreria-component/libreria-component';
import { ComicComponent } from './components/comic-component/comic-component';
import { LecturafilesComponent } from './components/lecturafiles-component/lecturafiles-component';
import { LecturaExcelComponent } from './components/lectura-excel-component/lectura-excel-component';
import { UploadFilesComponent } from './components/upload-files-component/upload-files-component';

@NgModule({
  declarations: [
    App,
    ProductosComponent,
    HomeComponent,
    MenuComponent,
    PadreNumerosDoblesComponent,
    HijoDoblesComponent,
    PadreCochesComponent,
    HijoCocheComponent,
    PadreDeportesComponent,
    HijoDeporteComponent,
    PadreNumerosComponent,
    HijoNumeroComponent,
    LibreriaComponent,
    ComicComponent,
    LecturafilesComponent,
    LecturaExcelComponent,
    UploadFilesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
