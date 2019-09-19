import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ability } from '../models/ability.model';
import { map } from 'rxjs/operators';

@Injectable()
export class AbilityService {
  constructor(private http: HttpClient) {

  }

  fetchAbilities(): Observable<Ability[]> {
    return this.http.get('https://pokeapi.co/api/v2/ability').pipe(
      map((response: { results }) => {
        const abilities = (response.results as any[]).map((ability: { name: string }, index) => {
          return { name: ability.name, id: index + 1 };
        });
        return abilities;
      })
    );
  }
}
