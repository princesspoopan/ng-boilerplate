import { AbilityService } from './services/ability.service';
import { AbilityEffects } from './store/ability.effects';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbilityListComponent } from './components/ability-list.component';
import { StoreModule } from '@ngrx/store';
import { abilityReducer } from './store/ability.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {path: '', component: AbilityListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('ability', abilityReducer),
    EffectsModule.forFeature([AbilityEffects])
  ],
  declarations: [
    AbilityListComponent
  ],
  providers: [
    AbilityService
  ],
  exports: [
    RouterModule
  ]
})
export class AbilitiesModule { }
