import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbilityState } from '../store/ability.reducer';
import { Store } from '@ngrx/store';
import { Ability } from '../models/ability.model';
import { selectAbilities } from '../store/ability.selector';
import { takeUntil, filter, take } from 'rxjs/operators';
import { fetchAbilities, fetchAbilitiesAction } from '../store/ability.actions';

@Component({
  selector: 'ability-list',
  templateUrl: './ability-list.component.html',
  styleUrls: ['./ability-list.component.less']
})
export class AbilityListComponent implements OnInit {
  public title = 'mini-ng';
  public abilities: Array<Ability> = [];

  constructor(private store$: Store<AbilityState>) {

  }

  ngOnInit() {
    this.store$.dispatch(fetchAbilitiesAction({ }));
    this.store$.select(selectAbilities).pipe(
      filter(abilities => !!(abilities && abilities.length)),
      take(1)
    ).subscribe((abilities) => {
      this.abilities = abilities;
    });
  }
}
