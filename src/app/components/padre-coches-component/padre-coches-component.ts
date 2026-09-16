import { Component } from '@angular/core';
import { Coche } from '../../models/coche';

@Component({
  selector: 'app-padre-coches-component',
  standalone: false,
  styleUrl: './padre-coches-component.css',
  templateUrl: './padre-coches-component.html',
})
export class PadreCochesComponent {
  //DECLARAMOS UN ARRAY DE COCHES
  public cochesArray: Array<Coche>;
  constructor() {
    this.cochesArray = [
      new Coche("Ford", "Mustang", 400, 45, false),
      new Coche("Volkswagen", "Escarabajo", 110, 5, false),
      new Coche("Lamborguini", "Diablo", 800, 75, false),
    ]
  }
}
