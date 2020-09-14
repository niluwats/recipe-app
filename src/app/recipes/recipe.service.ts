import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
        new Recipe(
            'Lasangna',
            'A super tasty cheesy lasangna',
            'https://cdn3.tmbi.com/toh/GoogleImages/Best-Lasagna_exps36333__TH133086D07_23_6b_RMS.jpg',
            [
                new Ingredient('mozerella bard', 10),
                new Ingredient('minced meat cans', 2),
                new Ingredient('lasangna sheets', 5)
            ]),
        new Recipe(
            'Baked meat',
            'This is just delicious',
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Parsely', 2)
            ]),
        new Recipe(
            'Tomato soup',
            'Nothing to say! Just wow!',
            'https://c1.peakpx.com/wallpaper/400/456/943/dishes-kitchen-bio-food-recipe-wallpaper-preview.jpg',
            [
                new Ingredient('Tomatoes', 5),
                new Ingredient('Parsely', 2),
                new Ingredient('Lemon', 2)
            ])
    ];
    constructor(private slService: ShoppingListService) {}

    getRecipes() {
      return this.recipes.slice();
    }
  
    getRecipe(index: number) {
      return this.recipes[index];
    }
  
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.slService.addIngredients(ingredients);
    }
  
    addRecipe(recipe: Recipe) {
      this.recipes.push(recipe);
      this.recipesChanged.next(this.recipes.slice());
    }
  
    updateRecipe(index: number, newRecipe: Recipe) {
      this.recipes[index] = newRecipe;
      this.recipesChanged.next(this.recipes.slice());
    }
  
    deleteRecipe(index: number) {
      this.recipes.splice(index, 1);
      this.recipesChanged.next(this.recipes.slice());
    }
  }
  