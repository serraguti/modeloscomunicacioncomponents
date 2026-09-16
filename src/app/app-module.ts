import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProductosComponent } from './components/productos.component/productos.component';
import { HomeComponent } from './components/home.component/home.component';
import { MenuComponent } from './components/menu.component/menu.component';
import { PadreNumerosDoblesComponent } from './components/padre-numeros-dobles-component/padre-numeros-dobles-component';
import { HijoDoblesComponent } from './components/hijo-dobles-component/hijo-dobles-component';

@NgModule({
  declarations: [
    App,
    ProductosComponent,
    HomeComponent,
    MenuComponent,
    PadreNumerosDoblesComponent,
    HijoDoblesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
