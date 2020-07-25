import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{

    private recipes: Recipe[] = [
        new Recipe(1, "Steak", "Meat baby!",
                    "https://hips.hearstapps.com/del.h-cdn.co/assets/18/08/2048x1024/landscape-1519155106-flank-steak-horizontal.jpg?resize=1200:*",
                    [
                        new Ingredient("Meat", 1),
                        new Ingredient("Sauce", 2)
                    ]),
        new Recipe(2, "Fries", "So fucking good",
                    "https://upload.wikimedia.org/wikipedia/commons/6/67/Fries_2.jpg",
                    [
                        new Ingredient("Potato", 2),
                        new Ingredient("Sault", 1)
                    ])
    ];

    constructor(private shoppingListService: ShoppingListService){ }
 
    getRecipe(id: number){
        const recipe = this.recipes.find(item => {return item.id === id});
        return recipe;
    }

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}