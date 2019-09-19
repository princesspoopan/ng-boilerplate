import { createAction, props } from '@ngrx/store';
import { Pokemon } from '../models/pokemon.model';

export const setPokemons = '[Pokemons] Set pokemons';
export const fetchPokemons = '[Pokemons] Fetch pokemons';

export const setPokemonsAction = createAction(
  setPokemons,
  props<{ pokemons: Pokemon[] }>()
);

export const fetchPokemonsAction = createAction(
  fetchPokemons,
  props<{ }>()
);
