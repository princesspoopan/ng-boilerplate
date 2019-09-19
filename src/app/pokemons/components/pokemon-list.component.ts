import { Component, OnInit, OnDestroy } from '@angular/core';
import { PokemonState } from '../store/pokemon.reducer';
import { Store } from '@ngrx/store';
import { Pokemon } from '../models/pokemon.model';
import { selectPokemons } from '../store/pokemon.selector';
import { takeUntil, filter, take } from 'rxjs/operators';
import { fetchPokemons, fetchPokemonsAction } from '../store/pokemon.actions';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.less']
})
export class PokemonListComponent implements OnInit {
  public title = 'mini-ng';
  public pokemons: Array<Pokemon> = [];

  constructor(private store$: Store<PokemonState>) {

  }

  ngOnInit() {
    this.store$.dispatch(fetchPokemonsAction({ }));
    this.store$.select(selectPokemons).pipe(
      filter(pokemons => !!(pokemons && pokemons.length)),
      take(1)
    ).subscribe((pokemons) => {
      this.pokemons = pokemons;
    });
  }
}
