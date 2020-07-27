import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{

    recipesChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    //     new Recipe("Steak", "Meat baby!",
    //                 "https://hips.hearstapps.com/del.h-cdn.co/assets/18/08/2048x1024/landscape-1519155106-flank-steak-horizontal.jpg?resize=1200:*",
    //                 [
    //                     new Ingredient("Meat", 1),
    //                     new Ingredient("Sauce", 2)
    //                 ]),
    //     new Recipe("Fries", "So fucking good",
    //                 "https://upload.wikimedia.org/wikipedia/commons/6/67/Fries_2.jpg",
    //                 [
    //                     new Ingredient("Potato", 2),
    //                     new Ingredient("Sault", 1)
    //                 ])
    // ];
    private recipes: Recipe[] = [];

    constructor(private shoppingListService: ShoppingListService){ }

    setRecipes(recipes:  Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
 
    getRecipe(id: number){
        const recipe = this.recipes[id];
        return recipe;
    }

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

}