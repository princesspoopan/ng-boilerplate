import { PokemonService } from './services/pokemon.service';
import { PokemonEffects } from './store/pokemon.effects';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list.component';
import { StoreModule } from '@ngrx/store';
import { pokemonReducer } from './store/pokemon.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {path: '', component: PokemonListComponent, }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('pokemon', pokemonReducer),
    EffectsModule.forFeature([PokemonEffects])
  ],
  declarations: [
    PokemonListComponent
  ],
  providers: [
    PokemonService
  ],
  exports: [
    RouterModule
  ]
})
export class PokemonsModule { }
