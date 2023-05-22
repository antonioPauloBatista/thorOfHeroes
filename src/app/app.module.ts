import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardModule } from './compenents/dashboard/dashboard.module';
import { HeroisModule } from './compenents/herois/herois.module';
import { MessageModule } from './compenents/message/message.module';
import { ToolbarModule } from './compenents/toolbar/toolbar.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [


    //CommonModule,
    BrowserModule,
    //FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    // DashboardModule,
    // HeroisModule,
    MessageModule,
    ToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
