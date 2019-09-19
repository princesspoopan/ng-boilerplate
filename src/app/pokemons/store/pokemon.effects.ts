import { PokemonService } from './../services/pokemon.service';
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { setPokemonsAction, fetchPokemons } from './pokemon.actions';
import { mergeMap, map } from 'rxjs/operators';

@Injectable()
export class PokemonEffects {
  constructor(
    private actions$: Actions,
    private pokemonService: PokemonService
  ) {}
  fetchPokemons$ = createEffect(() => {
    const effect$ = this.actions$.pipe(
      ofType(fetchPokemons),
      mergeMap((action) => {
        return this.pokemonService.fetchPokemons().pipe(
          map(pokemons => {
            return setPokemonsAction({ pokemons });
          })
        );
      })
    );
    return effect$;
  });
}
