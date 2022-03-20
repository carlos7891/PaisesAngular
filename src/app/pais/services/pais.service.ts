import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrlCapital:string ='https://restcountries.com/v2'

  get httpParams(){
    return  new HttpParams().set('fields','name,capital,alpha2Code,flag,population')
  }
  

  constructor( private http:HttpClient) {}

  buscarPais( termino:string): Observable<Country[]> {
    
    const url=`${this.apiUrlCapital}/name/${termino}`
    return this.http.get<Country[]>( url,{ params: this.httpParams} );
  }

  buscarPaisCapital( termino:string):Observable<Country[]> {
    
    const url=`${this.apiUrlCapital}/capital/${termino}`
    return this.http.get<Country[]>( url,{ params: this.httpParams} );
  }

  getPaisPorAlpha( id:string):Observable<Country> {
    
    const url=`${this.apiUrlCapital}/alpha/${id}`
    return this.http.get<Country>( url );
  }

  buscarRegion( termino:string):Observable<Country[]> {
    
    const url=`${this.apiUrlCapital}/regionalbloc/${termino}`
    return this.http.get<Country[]>( url, { params: this.httpParams} );

  }

}
