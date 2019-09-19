import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'pokemons',
    loadChildren: () => import('./pokemons/pokemons.module').then(mod => mod.PokemonsModule)
  },
  {
    path: 'abilities',
    loadChildren: () => import('./abilities/abilities.module').then(mod => mod.AbilitiesModule)
  },
  {
    path: '',
    redirectTo: 'pokemons',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
