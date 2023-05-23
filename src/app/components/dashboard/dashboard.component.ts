import { Component, OnInit } from '@angular/core';
import { Herois } from 'src/app/models/herois.model';
import { HeroService } from 'src/app/service/hero.service';

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
