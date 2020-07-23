import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipeSelect = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe("Steak", "Meat baby!",
                    "https://hips.hearstapps.com/del.h-cdn.co/assets/18/08/2048x1024/landscape-1519155106-flank-steak-horizontal.jpg?resize=1200:*",
                    [
                        new Ingredient("Meat", 1),
                        new Ingredient("Sauce", 2)
                    ]),
        new Recipe("Fries", "So fucking good",
                    "https://upload.wikimedia.org/wikipedia/commons/6/67/Fries_2.jpg",
                    [
                        new Ingredient("Potato", 2),
                        new Ingredient("Sault", 1)
                    ])
    ];

    constructor(private shoppingListService: ShoppingListService){ }

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}