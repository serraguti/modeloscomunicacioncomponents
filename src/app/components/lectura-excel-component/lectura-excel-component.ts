import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
//IMPORTAMOS LA LIBRERIA DE EXCEL
import * as XLSX from 'xlsx';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-lectura-excel-component',
  standalone: false,
  styleUrl: './lectura-excel-component.css',
  templateUrl: './lectura-excel-component.html',
})
export class LecturaExcelComponent implements OnInit {
  public comicsArray: Array<Comic>;
  
  constructor(private _cdr: ChangeDetectorRef){
    this.comicsArray = [];
  }

  ngOnInit(): void {
    let path: string = "./assets/comics.xlsx";
    fetch(path).then(res => res.arrayBuffer())
    .then((buffer) => {
      //RECUPERAR EL LIBRO DE TRABAJO
      const workbook = XLSX.read(buffer, {type: "array"});
      //RECUPERAR LA HOJA
      //NO SABEMOS EL NOMBRE DE LA HOJA QUE QUEREMOS Y LA NECESITAMOS
      //POR INDICE
      const hojaName = workbook.SheetNames[0];
      const hoja = workbook.Sheets[hojaName];
      //CONVERTIR LOS DATOS DE LA HOJA EN JSON
      let data = XLSX.utils.sheet_to_json(hoja);
      this.comicsArray = data.map((c: any) => new Comic(c.titulo, c.imagen, c.descripcion));
      this._cdr.detectChanges();      
      console.log(data);
    })
    .catch(err => console.log("error leyendo excel", err))
  }
}
