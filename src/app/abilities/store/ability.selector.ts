import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AbilityState } from './ability.reducer';

export interface FeatureState {
  counter: number;
}

export interface AppState {
  feature: FeatureState;
}

export const selectAbilityState = createFeatureSelector<AbilityState>('ability');

export const selectAbilities = createSelector(
  selectAbilityState,
  (state: AbilityState) => state.abilities
);
