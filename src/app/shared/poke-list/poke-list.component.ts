import { Component, HostListener, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

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
      this.getAllPokemons = storedPokemons;
    } else {
      this.pokeApiService.resetAndLoadPokemons().subscribe(
        res => {
          this.getAllPokemons = this.getAllPokemons.concat(res.results);
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
        this.getAllPokemons = this.getAllPokemons.concat(res.results);
      }
    );
  }

}
