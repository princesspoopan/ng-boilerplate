import { fetchPokemons } from './../store/pokemon.actions';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';
import { map } from 'rxjs/operators';

@Injectable()
export class PokemonService {
  constructor(private http: HttpClient) {

  }

  fetchPokemons(): Observable<Pokemon[]> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon').pipe(
      map((response: { results }) => {
        return response.results.map((pokemon: { name: string }, index: number) => ({
          name: pokemon.name, id: index + 1
        }));
      })
    );
  }
}
