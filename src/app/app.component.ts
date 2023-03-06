import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  isclicked = false;
  isclickedHeroes = false;
  onClickDashboard(){
    this.isclicked = !this.isclicked;
  }
  onClickHeroes(){
    this.isclickedHeroes = !this.isclickedHeroes;

  }
}

