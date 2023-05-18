import { Component, OnInit } from '@angular/core';
import { HeroService } from '../core/service/hero.service';
import { Herois } from '../core/models/herois.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  herois: Herois[] = [];
  constructor(private heroisService: HeroService) {

  }
  ngOnInit(): void {
    this.getHerois();
  }

  getHerois(): void {
    this.heroisService.getHerois().subscribe(heroList => {
      this.herois = heroList.slice(0, 5)
    })
  }
}
