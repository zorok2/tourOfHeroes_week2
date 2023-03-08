import { Component, Input } from '@angular/core';
import { Hero, heroes } from '../heroesList';

@Component({
  selector: 'app-heroes-dashboard',
  templateUrl: './heroes-dashboard.component.html',
  styleUrls: ['./heroes-dashboard.component.css']
})
export class HeroesDashboardComponent {
  @Input() isclicked!: Boolean;
  @Input() isclickedHeroes!: Boolean;
  heroes = heroes;
  isClickDetail = false;
  isbackDB = false;
  hero1: Hero = new Hero;
  onClickHeroDetail(h1: Hero){
    this.isclicked = false;
    this.isClickDetail =true;
  this.isbackDB = true;

    this.hero1 =  h1;
  }
}
