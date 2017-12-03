import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {RecipeService} from './services/recipe.service';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  recipeDetail: { name: string, description: string, imagePath: string };
  selectedRecipe;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        console.log('Received emitted selectedRecipe');
        // this.selectedRecipe = recipe;
        this.recipeDetail = recipe;
      }
    );
  }

  // onRecipeData(eventData: { name: string, description: string, imagePath: string }) {
  //   this.recipeDetail = eventData;
  // }


}
