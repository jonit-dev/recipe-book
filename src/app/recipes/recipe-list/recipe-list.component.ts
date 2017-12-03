import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeListComponent implements OnInit {

  // @Output() recipeData = new EventEmitter<Recipe>();

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    // get all recipe values from service
    this.recipes = this.recipeService.getRecipes();
  }


  // onRecipeData(eventData: { name: string, description: string, imagePath: string }) {
  //
  //   this.recipeData.emit({
  //     name: eventData.name,
  //     description: eventData.description,
  //     imagePath: eventData.imagePath
  //   });
  //
  //
  // }

}
