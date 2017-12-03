import {Injectable} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Injectable()
export class ShoppinglistService {

  private ingredients: Ingredient[] = [
    //
    // new Ingredient('Apples', 5),
    // new Ingredient('Tomatoes', 10),
  ];

  constructor() {
  }

  getIngredients() {
    return this.ingredients;
  }


  addToShoppingList(name: string, amount: number) {
    this.ingredients.push({name: name, amount: amount});
  }

}
