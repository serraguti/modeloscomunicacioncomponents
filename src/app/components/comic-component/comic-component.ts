import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-comic-component',
  standalone: false,
  styleUrl: './comic-component.css',
  templateUrl: './comic-component.html',
})
export class ComicComponent {
  @Input() comic!: Comic;
  @Output() mostrarFavorito: EventEmitter<any> = new EventEmitter();
  @Output() deleteComic: EventEmitter<any> = new EventEmitter();
  @Input() index!: number;

  seleccionarFavorito(): void{
    console.log("Hijo comic")
    this.mostrarFavorito.emit(this.comic);
  }

  delete(): void{
    this.deleteComic.emit(this.index);
  }
}
