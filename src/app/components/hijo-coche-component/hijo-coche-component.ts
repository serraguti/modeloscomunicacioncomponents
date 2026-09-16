import { Component, Input } from '@angular/core';
import { Coche } from '../../models/coche';

@Component({
  selector: 'app-hijo-coche-component',
  standalone: false,
  styleUrl: './hijo-coche-component.css',
  templateUrl: './hijo-coche-component.html',
})
export class HijoCocheComponent {
  @Input() car!: Coche;
  public mensaje: string;
  constructor(){
    this.mensaje = "";
  }

  comprobarEstado(): boolean{
    if (this.car.estado == false){
      this.mensaje = "El coche está apagado!!!";
      this.car.velocidad = 0;
      return false;
    }else{
      this.mensaje = "Arrancando a tope!!!";
      return true;
    }
  }

  acelerarCoche(): void{
    if (this.comprobarEstado() == false){
      //MOSTRAMOS UN TRISTE ALERT DE JS
      alert("Ande vas?, que estoy apagado!!!");
    }else{
      this.car.velocidad += this.car.aceleracion;
    }
  }

  encenderCoche(): void{
    this.car.estado = !this.car.estado;
    this.comprobarEstado();
  }
}
