import { Component, HostListener, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  private setAllPokemons: any[] = [];
  public getAllPokemons: any[] = [];

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(): void {
    const storedPokemons = this.pokeApiService.getStoredPokemons();
    if (storedPokemons.length > 0) {
      this.setAllPokemons = storedPokemons;
      this.getAllPokemons = this.setAllPokemons;
    } else {
      this.pokeApiService.resetAndLoadPokemons().subscribe(
        res => {
          this.setAllPokemons = this.getAllPokemons.concat(res.results);
          this.getAllPokemons = this.setAllPokemons;
        }
      );
    }
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.loadMorePokemons();
    }
  }

  loadMorePokemons(): void {
    this.pokeApiService.loadMorePokemons().subscribe(
      res => {
        this.setAllPokemons = this.setAllPokemons.concat(res.results);
        this.getAllPokemons = this.getAllPokemons.concat(res.results);
      }
    );
  }

  public getSearch(value: string) {
    if (value) {
      const filter = this.setAllPokemons.filter((res: any) => {
        return res.name.toLowerCase().includes(value.toLowerCase());
      });
      this.getAllPokemons = filter;
    } else {
      this.getAllPokemons = this.setAllPokemons;
    }
  }
}
