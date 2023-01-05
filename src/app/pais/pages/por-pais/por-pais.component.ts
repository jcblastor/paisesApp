import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries-response.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
  paises: Country[] = [];
  termino: string = '';
  isError: boolean = false;

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.isError = false;
    this.termino = termino;

    this.paisService.buscarPais(termino).subscribe((paises) => {
      this.paises = paises;
    }, (err) => {
      this.isError = true;
      this.paises = [];
    })
  }

  sugerencias(termino: string) {

  }
}


