import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';


import { ServiceWorkerModule } from '@angular/service-worker'
import { environment } from '../environments/environment.prod'
import { DataService } from './data.service';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    SearchComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDqBpVM6Gu5rPSQ9xnExkBJGEr4YcpoI6c'
    }),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
