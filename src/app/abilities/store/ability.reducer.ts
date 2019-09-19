import { Ability } from './../models/ability.model';
import { createReducer, on } from '@ngrx/store';
import { setAbilitiesAction } from './ability.actions';

export interface AbilityState {
  abilities: Ability[];
}

export const initialState: AbilityState = {
  abilities: []
};

const reducer = createReducer(initialState,
  on(setAbilitiesAction, (state: AbilityState, props) => ({ ...state, abilities: props.abilities}))
);

export function abilityReducer(state, action) {
  return reducer(state, action);
}
