import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { Herois } from 'src/app/models/herois.model';
import { HeroService } from 'src/app/service/hero.service';
import { HEROIS } from 'src/app/service/mock-herois';
import { HeroisComponent } from '../herois/herois.component';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-hero-datail',
  templateUrl: './hero-datail.component.html',
  styleUrls: ['./hero-datail.component.css']
})
export class HeroDatailComponent implements OnInit {

  hero?: Herois;
  isEditing = false;

  form = this.fb.group({
    id: [0],
    name: ['', [Validators.required, Validators.minLength(3)]]
  });

  constructor(
    private fb: FormBuilder,
    private heroisService: HeroService,
    private location: Location,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar) {


  }

  ngOnInit(): void {
    this.getHerois()
  }

  getHerois(): void {

    const paramId = this.route.snapshot.paramMap.get('id')

    if (paramId !== 'new') {
      this.isEditing = true;
      const id = Number(this.route.snapshot.paramMap.get('id'));

      this.heroisService.getOne(id).subscribe(
        (hero) => {
          this.hero = hero
          this.form.controls['id'].setValue(hero.id);
          this.form.controls['name'].setValue(hero.name);
        }
      )
    }


  }

  goBack() {
    this.location.back()
  }


  update(): void {

    const { valid, value } = this.form;
    if (valid) {

      if (this.hero !== undefined) {

        const hero: Herois = {
          id: this.hero.id,
          name: value?.name ?? ''
        }

        this.heroisService.update(hero).subscribe(() => this.goBack())
      }

    } else {
      this.showErrorMsg();
    }

  }

  create(): void {

    const { valid, value } = this.form;

    if (valid) {

      const hero: Herois = {
        name: value?.name ?? ''
      } as Herois;

      this.heroisService.create(hero).subscribe(() => this.goBack())


    } else {
      this.showErrorMsg();
    }
  }


  private showErrorMsg(): void {
    this.snackBar.open("Please check error fault", "Ok", { duration: 5000, verticalPosition: 'top' })
  }

}
