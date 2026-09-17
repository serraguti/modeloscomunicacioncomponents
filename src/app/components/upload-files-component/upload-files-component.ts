import { Component, ChangeDetectorRef } from '@angular/core';
import * as XLSX from 'xlsx';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-upload-files-component',
  standalone: false,
  styleUrl: './upload-files-component.css',
  templateUrl: './upload-files-component.html',
})
export class UploadFilesComponent {
  //VARIABLE string PARA LEER TEXTO PLANO
  public content!: string;
  public comicsArray: Array<Comic>;
  
  constructor(private _cdr: ChangeDetectorRef){
    this.comicsArray = [];
  }

  onFileSelected(event: any): void{
    //NECESITAMOS UN LECTOR PARA RECUPERAR LOS DATOS
    //DEL FICHERO
    const reader = new FileReader();
    //CREAMOS UN METODO DE EVENTO.
    //ESTO NUNCA SE VA A EJECUTAR, ES UN METODO DINAMICO.
    reader.onload = (readerEvent: any) => {
      //EN LA PROPIEDAD result DEL EVENTO ES DONDE VIENE EL CONTENIDO
      //DEL FICHERO
      const contenido = readerEvent.target.result;
      //DE ESTA FORMA VERIFICAMOS PARA EL COMPILADOR QUE LA VARIABLE ES
      //STRING
      if (typeof readerEvent.target.result === "string"){
        this.content = contenido;
      }
      console.log(contenido);
      this._cdr.detectChanges();
    }
    //LEEMOS EL FICHERO QUE VIENE DENTRO DEL <input>
    reader.readAsText(event.target.files[0]);
  }

  onFileSelectedExcel(event: any): void {
    const reader = new FileReader();
    let aux = Array<Comic>();
    //METODO DELEGADO PARA LA LECTURA DEL EXCEL
    reader.onload = (e: any) => {
      //AQUI HAREMOS LA LECTURA DEL EXCEL
      //AHORA MISMO, AL UTILIZAR EL METODO DE ArrayBuffer LO QUE 
      //VIENE ES UN BINARY STRING
      const binaryString: string = e.target.result;
      const workbook = XLSX.read(binaryString, {type: "binary"});
      const sheetName = workbook.SheetNames[0];
      //RECUPERAMOS LA HOJA DE TRABAJO POR SU NAME
      const sheet = workbook.Sheets[sheetName];
      let excelData: any[] = XLSX.utils.sheet_to_json(sheet);
      console.log(excelData);
      aux = excelData.map(c => new Comic(c.titulo, c.imagen, c.descripcion));
      this.comicsArray = aux;
      this._cdr.detectChanges();
    }
    //LA LECTURA DEL FICHERO, ESTA VEZ SERA MEDIANTE
    //Array Buffer
    reader.readAsArrayBuffer(event.target.files[0]);
  }
}
