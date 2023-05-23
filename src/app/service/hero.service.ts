import { Injectable } from '@angular/core';
import { HEROIS } from './mock-herois';
import { Herois } from '../models/herois.model';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroisUrl = 'api/herois'

  constructor(private messagerService: MessagesService, private http: HttpClient) {
  }

  getHerois(): Observable<Herois[]> {


    return this.http.get<Herois[]>(this.heroisUrl);
    // const herois = of(HEROIS)
    // this.log("fetched heroes");
    // return herois
  }



  getHero(id: number): Observable<Herois> {
    const hero = HEROIS.find((hero) => hero.id === id)!;
    this.log(`fetched hero id=${id}`)

    return of(hero)
  }


  private log(message: string): void {
    this.messagerService.add(`HeroisService:${message}`);
  }
}
