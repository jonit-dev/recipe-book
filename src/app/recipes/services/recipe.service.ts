import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from '../recipe.model';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'http://juliandance.org/wp-content/uploads/2016/01/RedApple.jpg'),
    new Recipe('Second Recipe', 'This is a second Recipe', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg')
  ];


  constructor() {
  }

  getRecipes() {
    return this.recipes.slice();
  }


}
