import { Component, Input } from '@angular/core';
import { Hero, heroes } from '../heroesList';

@Component({
  selector: 'app-heroes-heroes-list',
  templateUrl: './heroes-heroes-list.component.html',
  styleUrls: ['./heroes-heroes-list.component.css']
})
export class HeroesHeroesListComponent {
  @Input() isclickedHeroes!: Boolean;
  heroes = heroes;
  hItem!: Hero;
  isbackHL = false;
  onClickRow(item: Hero){
    this.isclickedHeroes = false;;
    this.hItem = item;
    this.isbackHL = true;
  }

}
