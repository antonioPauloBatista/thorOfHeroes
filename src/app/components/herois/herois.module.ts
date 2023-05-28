import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroisComponent } from './components/herois/herois.component';
import { HeroDatailComponent } from './components/hero-datail/hero-datail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field'
import { HeroisRoutingModule } from './herois-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [HeroisComponent, HeroDatailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeroisRoutingModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule
  ]
})
export class HeroisModule { }
