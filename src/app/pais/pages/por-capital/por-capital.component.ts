import { Component } from '@angular/core';

import { Country } from '../../interfaces/countries-response.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {
  paises: Country[] = [];
  termino: string = '';
  isError: boolean = false;

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.isError = false;
    this.termino = termino;

    this.paisService.buscarCapital(termino).subscribe((paises) => {
      this.paises = paises;
    }, (err) => {
      this.isError = true;
      this.paises = [];
    })
  }

}
