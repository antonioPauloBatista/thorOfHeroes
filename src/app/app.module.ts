import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MessageModule } from './components/message/message.module';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { PageNotFoundModule } from './components/page-not-found/page-not-found.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [

    HttpClientModule,
    //CommonModule,
    BrowserModule,
    //FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    // DashboardModule,
    // HeroisModule,
    MessageModule,
    ToolbarModule,
    PageNotFoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
