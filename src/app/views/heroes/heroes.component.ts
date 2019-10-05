import { HEROES } from './mockHeroes';
import { Hero } from './../../models/hero';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  // hello = 'hello world heroes'

  // hero : Hero = {
  //   id:1,
  //   name:' world heroes name here'
  // };

  heroes  = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  ngOnInit() {
  }
  

}
