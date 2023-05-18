import { Injectable } from '@angular/core';
import { HEROIS } from './mock-herois';
import { Herois } from '../models/herois.model';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messagerService: MessagesService) {

  }
  getHerois(): Observable<Herois[]> {

    const herois = of(HEROIS)
    this.messagerService.add("HeroService: fetched heroes");
    return herois
  }


  getHero(id: number): Observable<Herois> {
    const hero = HEROIS.find((hero) => hero.id === id)!;
    this.messagerService.add(`HeroService:fetched hero id=${id}`)

    return of(hero)
  }
}
