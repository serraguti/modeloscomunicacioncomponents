import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-deporte-component',
  standalone: false,
  styleUrl: './hijo-deporte-component.css',
  templateUrl: './hijo-deporte-component.html',
})
export class HijoDeporteComponent {
  @Input() sport!: string;
  @Output() seleccionarFavoritoPadre: EventEmitter<any> = new EventEmitter();

  seleccionarFavorito(): void{
    //AQUI HACEMOS LO QUE DESEEMOS EN EL HIJO Y, CUANDO LO DESEEMOS, 
    //ACTIVAMOS EL CODIGO DEL PADRE
    this.seleccionarFavoritoPadre.emit(this.sport);
  }
}
