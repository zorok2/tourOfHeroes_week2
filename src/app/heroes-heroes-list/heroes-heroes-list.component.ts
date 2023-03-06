import { Component, Input } from '@angular/core';
import { heroes } from '../heroesList';

@Component({
  selector: 'app-heroes-heroes-list',
  templateUrl: './heroes-heroes-list.component.html',
  styleUrls: ['./heroes-heroes-list.component.css']
})
export class HeroesHeroesListComponent {
  @Input() isclickedHeroes!: Boolean;
  heroes = heroes;

}
