import { Component, Input } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  @Input() placeholder: string = '';

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.mostrarSugerencias= false;
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino).subscribe({
      next: (paises) => {
        this.paises = paises;
        console.log(paises);
      },
      error: (err) => {
        console.error(err);
        this.hayError = true;
        this.paises = [];
      },
      complete: () => console.info('complete'),
    });
  }

  sugerencias(termino: string) {
    this.mostrarSugerencias=true;
    this.termino = termino;
    this.paisService.buscarPais(this.termino).subscribe({
      next: (paises) => {
        this.paisesSugeridos = paises.splice(0, 5);
        console.log(paises);
      },
      error: (err) => {
        console.error(err);
        this.paisesSugeridos =[]
      },
      complete: () => console.info('complete'),
    });
  }

  buscarSugerido( termino: string ){
    this.buscar( termino );
    
  }
}
