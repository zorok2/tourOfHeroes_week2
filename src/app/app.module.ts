import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeroesDashboardComponent } from './heroes-dashboard/heroes-dashboard.component';
import { HeroesHeroesListComponent } from './heroes-heroes-list/heroes-heroes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesDashboardComponent,
    HeroesHeroesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
