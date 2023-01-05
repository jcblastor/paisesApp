import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {
  @Input() placeholder: string = '';

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  termino: string = '';
  debouncer: Subject<string> = new Subject();

  ngOnInit() {
    this.debouncer.pipe(
      debounceTime(300)
    ).subscribe( valor => {
      this.onDebounce.emit(valor)
    });
  }

  buscar() {
    this.onEnter.emit(this.termino);
  };

  teclaPresionada() {
    /* se puede recibit el evento y trabajar con ese
      const valor = event.target.value;
      console.log(valor);
    */

    // en este ejemplo trabajaremos con el termino que ya esta asociado.
    // next envia el valor al debaucer
    this.debouncer.next(this.termino)
  }
}
