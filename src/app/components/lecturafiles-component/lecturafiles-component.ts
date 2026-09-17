import { Component, OnInit } from '@angular/core';
import { Comic } from '../../models/comic';
@Component({
  selector: 'app-lecturafiles-component',
  standalone: false,
  styleUrl: './lecturafiles-component.css',
  templateUrl: './lecturafiles-component.html',
})
export class LecturafilesComponent implements OnInit {
  public content!: string;
  public comicsArray: Array<Comic>;
  constructor(){
    this.comicsArray = [];
  }
  ngOnInit(): void {
    let path: string = "./assets/comics.json";
    fetch(path).then(res => res.json())
    .then((data: any[]) =>{
      for (let elem of data){
        let comic: Comic = new Comic(elem.nombre, elem.imagen, elem.descripcion);
        this.comicsArray.push(comic);
        console.log("Nombre: " + elem.nombre);
      }
    })
  }

  readFileText(): void{
    //LA RUTA AL FILE DIRECTAMENTE ESTAMOS POSICIONADOS EN public (FRONT)
    let path: string = "./assets/test.txt";
    //DENTRO DE FETCH, EN EL MOMENTO DE TRABAJAR CON LOS FORMATOS, 
    //DEBEMOS INDICAR EL TIPADO QUE VAMOS A LEER
    //TENEMOS 3 TIPOS DE DATO: 
    // text(): Texto plano
    // blob(): Array de byte[] (binario)
    // json(): Formato JSON
    fetch(path).then(res => res.text())
    .then((texto) => {
      //EN LA VARIABLE TEXTO, TENEMOS EL CONTENIDO
      this.content = texto;
    })
  }
}
