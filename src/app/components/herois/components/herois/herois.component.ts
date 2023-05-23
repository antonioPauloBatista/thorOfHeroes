import { Component, OnInit } from '@angular/core';
import { Herois } from 'src/app/models/herois.model';
import { HeroService } from 'src/app/service/hero.service';


@Component({
  selector: 'app-herois',
  templateUrl: './herois.component.html',
  styleUrls: ['./herois.component.css']
})
export class HeroisComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name']
  herois: Herois[] = []

  constructor(private heroService: HeroService) {
    this.getHerois()
  }

  ngOnInit(): void {

  }

  getHerois() {
    this.heroService.getHerois().subscribe(
      heroes => {
        this.herois = heroes
      },
    );
  }


}
