import { Recipe } from './recipe.model';
import {  Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            'Pasta', 
            'A super tasty soup',
             'https://get.pxhere.com/photo/https://pinchofyum.com/wp-content/uploads/Vegan-Vodka-Pasta-Square.jpg-meal-food-vegetable-recipe-cuisine-vegetarian-food-parmigiana-1417897.jpg',
             [
                 new Ingredient('pasta',10),
                 new Ingredient('soy sauce',2)
             ]),
        new Recipe(
            'Baked meat', 
            'This is just delicious',
             'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
             [
                new Ingredient('Meat',1),
                new Ingredient('Parsely',2) 
             ]),
        new Recipe(
            'Tomato soup',
             'Nothing to say! Just wow!',
             'https://c1.peakpx.com/wallpaper/400/456/943/dishes-kitchen-bio-food-recipe-wallpaper-preview.jpg',
             [
                new Ingredient('Tomatoes',5),
                new Ingredient('Parsely',2),
                new Ingredient('Lemon',2) 
             ])
    ];
    constructor(private shoppingListService:ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }
    getRecipe(index:number){
        return this.recipes[index];
    }
    AddIngredientsToShoppingList(ingredients:Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}