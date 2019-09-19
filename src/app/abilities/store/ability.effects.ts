import { AbilityService } from './../services/ability.service';
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { setAbilitiesAction, fetchAbilities } from './ability.actions';
import { mergeMap, map } from 'rxjs/operators';

@Injectable()
export class AbilityEffects {
  constructor(
    private actions$: Actions,
    private abilityService: AbilityService
  ) {}
  fetchAbilities$ = createEffect(() => {
    const effect$ = this.actions$.pipe(
      ofType(fetchAbilities),
      mergeMap((action) => {
        return this.abilityService.fetchAbilities().pipe(
          map(abilities => {
            return setAbilitiesAction({ abilities });
          })
        );
      })
    );
    return effect$;
  });
}
