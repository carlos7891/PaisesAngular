import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin-right:5px;
    }
  `
  ]
})
export class PorRegionComponent {

  regiones: string[] = [
    'EU',
    'EFTA',
    'CARICOM',
    'PA',
    'AU',
    'USAN',
    'EEU',
    'AL',
    'ASEAN',
    'CAIS',
    'CEFTA',
    'NAFTA' ,
    'SAARC']
  regionActiva:string ='';
  paises:Country[] =[];

  constructor( private paisService:PaisService) { }

  getClaseCss( region: string):string{
    return ((region === this.regionActiva) 
    ? 'btn btn-primary'
    : 'btn btn-outline-primary')
  }

  activarRegion(region:string){
    this.regionActiva = region;
    this.paisService.buscarRegion( this.regionActiva)
    .subscribe({
      next: ( paises) => {
        this.paises= paises
      },
      error: (err) => {
        console.error(err);
        this.paises=[];
      },
      complete: () => console.info('complete') 
    })
  }



}
