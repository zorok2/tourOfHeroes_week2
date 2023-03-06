import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesHeroesListComponent } from './heroes-heroes-list.component';

describe('HeroesHeroesListComponent', () => {
  let component: HeroesHeroesListComponent;
  let fixture: ComponentFixture<HeroesHeroesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesHeroesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesHeroesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
