import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

    recipeSelected = new Subject<Recipe>();
   private  recipes: Recipe[] = [
        new Recipe('Test Recipe' , 
        'A simply test recipe',
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2020%2F03%2FMelting-Potatoes.jpg',
        [
            new Ingredient('Potato',5),
            new Ingredient('Onion', 3)
        ]),
        new Recipe('Test Recipe' , 
        'A simply test recipe',
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2020%2F03%2FMelting-Potatoes.jpg',
        [
            new Ingredient('Potato',5),
            new Ingredient('Onion', 3)
        ])

    ];

    constructor(private slService : ShoppingListService) {}

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes.slice()[index];

    }

    addIngredientsToShoppingList(ingredients : Ingredient[]) {
        this.slService.addIngredients(ingredients);

    }
}