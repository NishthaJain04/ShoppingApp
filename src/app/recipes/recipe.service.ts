import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipelist/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('tasty pizza',
    'pizza desc',
        // tslint:disable-next-line:max-line-length
     'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto,w_600,h_750,c_fit,fl_strip_profile/https://s3.amazonaws.com/pixtruder/original_images/17c6ec7292ce74c4f38c71ee4816925c46ffd4bf',
     [
       new Ingredient('Pizza Base', 1),
       new Ingredient('Cheese', 20)
     ]
    ),

    new Recipe('yummy pizza',
     'pizza desc',
         // tslint:disable-next-line:max-line-length
      'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto,w_600,h_750,c_fit,fl_strip_profile/https://s3.amazonaws.com/pixtruder/original_images/17c6ec7292ce74c4f38c71ee4816925c46ffd4bf',
      [
        new Ingredient('Tomato', 5),
        new Ingredient('Olives', 20)
      ]
    )

  ];
  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
