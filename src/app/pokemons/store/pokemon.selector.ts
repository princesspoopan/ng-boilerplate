import { createSelector, createFeatureSelector } from '@ngrx/store';
import { PokemonState } from './pokemon.reducer';

export interface FeatureState {
  counter: number;
}

export interface AppState {
  feature: FeatureState;
}

export const selectPokemonState = createFeatureSelector<PokemonState>('pokemon');

export const selectPokemons = createSelector(
  selectPokemonState,
  (state: PokemonState) => state.pokemons
);
