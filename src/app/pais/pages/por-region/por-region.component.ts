import { Component } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/countries-response.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];

  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  activarRegion(region: string):void {
    if(region === this.regionActiva) return;

    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarPorRegion(region).subscribe((paises) => {
      this.paises = paises;
    }, (err) => {
      this.paises = [];
    })
  }

  getClassCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary me-2' : 'btn btn-outline-primary me-2';
  }
}
