import { Injectable } from '@angular/core';
import { HEROIS } from './mock-herois';
import { Herois } from '../models/herois.model';
import { Observable, finalize, of, tap } from 'rxjs';
import { MessagesService } from './messages.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HeroService {


  private heroisUrl = 'api/herois'


  constructor(private messagerService: MessagesService, private http: HttpClient) {
  }

  getAll(): Observable<Herois[]> {

    this.log("fetched heroes");
    return this.http.get<Herois[]>(this.heroisUrl).pipe(
      tap((herois) => this.log(`fetched ${herois.length} heroes`))
    )

  }



  getOne(id: number): Observable<Herois> {
    this.log(`fetched hero id=${id}`)
    return this.http.get<Herois>(`${this.heroisUrl}/${id}`).pipe(tap((herois) => this.log(`fetched hero id=${herois.id} and name=${herois.name}`)))

  }

  update(hero: Herois): Observable<Herois> {
    return this.http.put<Herois>(`${this.heroisUrl}/${hero.id}`, hero).pipe(
      tap(hero => this.log(`updated hero id=${hero.id} and name=${hero.name}`))
    )
  }

  create(hero: Herois): Observable<Herois> {
    return this.http.post<Herois>(this.heroisUrl, hero).pipe(
      tap((heroT) => `Create hero id=${heroT.id} and name=${heroT.name}`)
    )
  }

  private log(message: string): void {
    this.messagerService.add(`HeroisService:${message}`);
  }


}
