import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MessageComponent } from './core/components/message/message.component';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { HeroisModule } from './herois/herois.module';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    ToolbarComponent,
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule,

    //CommonModule,
    BrowserModule,
    //FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    DashboardModule,
    HeroisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
