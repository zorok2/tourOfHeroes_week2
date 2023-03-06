import { Component, Input } from '@angular/core';
import { heroes } from '../heroesList';

@Component({
  selector: 'app-heroes-dashboard',
  templateUrl: './heroes-dashboard.component.html',
  styleUrls: ['./heroes-dashboard.component.css']
})
export class HeroesDashboardComponent {
  @Input() isclicked!: Boolean;
  @Input() isclickedHeroes!: Boolean;
  heroes = heroes;
}
