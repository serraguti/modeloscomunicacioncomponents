import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo-dobles-component',
  standalone: false,
  styleUrl: './hijo-dobles-component.css',
  templateUrl: './hijo-dobles-component.html',
})
export class HijoDoblesComponent {
  //COMO NUMERO ESTA BINDING, NO NECESITAMOS INICIALIZARLO
  @Input() numero!: number;
}
