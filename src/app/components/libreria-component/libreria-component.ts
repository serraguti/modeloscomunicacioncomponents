import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-libreria-component',
  standalone: false,
  styleUrl: './libreria-component.css',
  templateUrl: './libreria-component.html',
})
export class LibreriaComponent implements OnInit {
  public comicsArray: Array<Comic>;
  public comicFavorito!: Comic;
  constructor(private _cdr: ChangeDetectorRef){
   this.comicsArray = [new Comic("Peter Porker", "https://images.squarespace-cdn.com/content/v1/591a09be29687facef049955/1577120358648-LF2X9L388NUR661WF2HN/STL139169.jpg", "Spider Ham")]; 
  }

  ngOnInit(): void {
    let aux: Array<Comic> = [];
    let path: string = "./assets/comics.json";
    fetch(path).then(res => res.json())
    .then((data: any[]) =>{
      for (let elem of data){
        let comic: Comic = new Comic(elem.nombre, elem.imagen, elem.descripcion);
        aux.push(comic);
        console.log("Nombre: " + elem.nombre);
      }
      this.comicsArray = aux;
      this._cdr.detectChanges();
    })
  }

  mostrarFavorito(favorito: Comic): void{
    console.log("Padre comic")
    this.comicFavorito = favorito;
  }

  deleteComic(index: number): void{
    //ELIMINA DEL ARRAY n ELEMENTOS INDICANDO EL INICIO
    this.comicsArray.splice(index, 1);
  }

  
}
