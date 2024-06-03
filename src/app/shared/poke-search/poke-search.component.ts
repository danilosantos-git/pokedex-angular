import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent implements OnInit {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public search(value: string): void {
    this.emmitSearch.emit(value);
  }

}
