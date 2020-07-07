import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("A test recipe 1", "This is simply a test 1",
               "https://hips.hearstapps.com/del.h-cdn.co/assets/18/08/2048x1024/landscape-1519155106-flank-steak-horizontal.jpg?resize=1200:*"),
    new Recipe("A test recipe 2", "This is simply a test 2",
               "https://hips.hearstapps.com/del.h-cdn.co/assets/18/08/2048x1024/landscape-1519155106-flank-steak-horizontal.jpg?resize=1200:*")
  ];

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  selectRecipe(recipe: Recipe){
    this.selectedRecipe.emit(recipe);
  }

}
