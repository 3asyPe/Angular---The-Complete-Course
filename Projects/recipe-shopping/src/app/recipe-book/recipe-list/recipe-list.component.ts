import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("A test recipe", "This is simply a test",
               "https://hips.hearstapps.com/del.h-cdn.co/assets/18/08/2048x1024/landscape-1519155106-flank-steak-horizontal.jpg?resize=1200:*")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
