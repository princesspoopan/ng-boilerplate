import { Pokemon } from './../models/pokemon.model';
import { createReducer, on } from '@ngrx/store';
import { setPokemonsAction } from './pokemon.actions';

export interface PokemonState {
  pokemons: Pokemon[];
}

export const initialState: PokemonState = {
  pokemons: []
};

const reducer = createReducer(initialState,
  on(setPokemonsAction, (state: PokemonState, props) => ({ ...state, pokemons: props.pokemons}))
);

export function pokemonReducer(state, action) {
  return reducer(state, action);
}
