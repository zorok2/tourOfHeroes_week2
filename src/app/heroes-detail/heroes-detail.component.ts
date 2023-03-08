import { Component, Input } from '@angular/core';
import { Hero } from '../heroesList';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.css']
})
export class HeroesDetailComponent {
  @Input() hero!: Hero;
  @Input() isClickDetail!: Boolean;
  @Input() isBackDashBoard!: Boolean;
  @Input() isBackHeroesList!: Boolean;

  back(){
    this.isClickDetail = false;
    // if(this.isBackHeroesList){
    //   this.isBackHeroesList = false;
    // }
    // else if(this.isBackDashBoard){
    //   this.isBackDashBoard = false;
    // }
  }
 
}
