import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { Herois } from 'src/app/models/herois.model';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-hero-datail',
  templateUrl: './hero-datail.component.html',
  styleUrls: ['./hero-datail.component.css']
})
export class HeroDatailComponent implements OnInit {

  hero?: Herois;

  constructor(
    private heroisService: HeroService,
    private location: Location,
    private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.getHerois()
  }

  getHerois(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroisService.getHero(id).subscribe(
      (hero) => {
        this.hero = hero
      }
    )
  }

  goBack() {
    this.location.back()
  }

}
