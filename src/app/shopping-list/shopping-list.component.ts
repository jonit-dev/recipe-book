import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppinglistService} from './services/shoppinglist.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [];

  constructor(private shoppinglistService: ShoppinglistService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppinglistService.getIngredients();
  }

  // onIngredientData(Ingredient) {
  //   this.ingredients.push(Ingredient);
  // }

}
