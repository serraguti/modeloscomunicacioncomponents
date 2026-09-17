import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-numeros-component',
  standalone: false,
  styleUrl: './padre-numeros-component.css',
  templateUrl: './padre-numeros-component.html',
})
export class PadreNumerosComponent {
  public numerosArray: Array<number>;
  public suma: number;
  constructor() {
    this.numerosArray = [5,6,22,11]
    this.suma = 0;
  }

  sumarNumerosParent(numeroRecibido: number): void{
    console.log("Padre " + numeroRecibido)
    this.suma += numeroRecibido;
  }

  generarNumero():void{
    let random = Math.floor(Math.random() * 100)+1;
    this.numerosArray.push(random);
  }
}
