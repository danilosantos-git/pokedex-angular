import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Observables
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private apiUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  private offset: number = 0;
  private limit: number = 100;
  private allPokemons: any[] = [];

  constructor(
    private http: HttpClient
  ) { }

  get apiListAllPokemons(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?offset=${this.offset}&limit=${this.limit}`).pipe(
      tap(res => res),
      tap(res => {
        res.results.map((resPokemons: any) => {
          this.apiGetPokemons(resPokemons.url).subscribe(
            res => resPokemons.status = res
          )
        });
        this.allPokemons = res.results;
      }),
    )
  }

  public resetAndLoadPokemons(): Observable<any> {
    this.offset = 0;
    this.allPokemons = [];
    return this.apiListAllPokemons;
  }

  public loadMorePokemons(): Observable<any> {
    this.offset += this.limit;
    return this.http.get<any>(`${this.apiUrl}?offset=${this.offset}&limit=${this.limit}`).pipe(
      tap(res => res),
      tap(res => {
        res.results.map((resPokemons: any) => {
          this.apiGetPokemons(resPokemons.url).subscribe(
            res => resPokemons.status = res
          )
        });
        this.allPokemons = this.allPokemons.concat(res.results);
      }),
    )
  }

  public apiGetPokemons(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      map(
        res => res
      )
    )
  }

  public getStoredPokemons(): any[] {
    return this.allPokemons;
  }
}
