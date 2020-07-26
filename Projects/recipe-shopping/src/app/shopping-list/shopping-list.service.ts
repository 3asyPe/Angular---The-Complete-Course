import { Ingredient } from '../shared/ingredient.model';
import { Subject} from 'rxjs';

export class ShoppingListService{

    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Tomatoes", 10),
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    getIngredient(index: number){
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient){
        let existingIngredient = this.ingredients.find(tempIng => {return tempIng.name === ingredient.name})
        if(existingIngredient){
            existingIngredient.amount += ingredient.amount;
        }
        else{
            this.ingredients.push(ingredient);
        }
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        for(let ingredient of ingredients){
            this.addIngredient(ingredient);
        }
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient){
        if(this.ingredients[index].name !== newIngredient.name){
            let existingIngredient = this.ingredients.find(tempIng => {
                return tempIng.name === newIngredient.name
            });
            if(existingIngredient){
                existingIngredient.amount += newIngredient.amount;
                this.deleteIngredient(index);
                this.ingredientsChanged.next(this.ingredients.slice());
                return;
            }
        }
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number){
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

}