import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-deportes-component',
  standalone: false,
  styleUrl: './padre-deportes-component.css',
  templateUrl: './padre-deportes-component.html',
})
export class PadreDeportesComponent {
  public deportes: Array<string>;
  public mensaje!: string;

  //EL PADRE NECESITA UN METODO PARA ENLAZARLO CON EL HIJO Y 
  //ENVIARLO COMO SI FUERA PROPS
  seleccionarFavoritoPadre(data: string): void{
    console.log("Yo soy tu padre");
    this.mensaje = data;
  }

  constructor(){
    this.deportes = ["Futbol", "Canicas", "Natación", "Surf", "Basket"];
  }
}
