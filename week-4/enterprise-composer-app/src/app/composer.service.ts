/**
 * Title: composer.service.ts
 * Author: Victor Soto
 * Date: 04/14/2024
 * Description: composer service
 */


import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {
        composerId: 100, fullName: 'Ludwig van Beethoven', genre: "Classical"
      },
      {
        composerId: 101, fullName: 'Johann Sebastian Bach', genre:"Classical"
      },
      {
        composerId: 102, fullName: 'Wolfgang Amadeus Mozart', genre: "Classical"
      },
      {
        composerId: 103, fullName: 'Johannes Brahms', genre:"Classical"
      },
      {
        composerId: 104, fullName: 'Joseph Haydn', genre: "Classical"
      },
    ]
  }

  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }

  getComposer(composerId: number): IComposer | undefined {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }

filterComposers(name: string): Observable<IComposer[]> {
  return of(this.composers).pipe(
    map(composers => composers.filter(composer => composer.fullName.toLowerCase().indexOf(name.toLowerCase()) > -1))
  );
}

}
