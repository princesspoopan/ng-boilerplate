import { createAction, props } from '@ngrx/store';
import { Ability } from '../models/ability.model';

export const setAbilities = '[Abilities] Set abilities';
export const fetchAbilities = '[Abilities] Fetch abilities';

export const setAbilitiesAction = createAction(
  setAbilities,
  props<{ abilities: Ability[] }>()
);

export const fetchAbilitiesAction = createAction(
  fetchAbilities,
  props<{ }>()
);
