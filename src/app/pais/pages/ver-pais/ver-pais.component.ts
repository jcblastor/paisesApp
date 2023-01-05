import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/countries-response.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit{
  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService,
  ) {}

  ngOnInit(): void {
    /*
      *Esta es la forma de trabajar si nuestro observable depende de otro
      this.activatedRoute.params.subscribe( ({ id }) => {
        this.paisService.buscarPaisPorAlpha(id).subscribe((pais) => {
          console.log(pais);
        })
      })
    */
    // lo mismo de arriba se puede hacer con operadores de RxJS
    this.activatedRoute.params.pipe(
      switchMap( ({ id }) => this.paisService.buscarPaisPorAlpha(id)),
      // tap((resp) => console.log(resp[0].translations))
    ).subscribe(resp => this.pais = resp[0])
  }
}
