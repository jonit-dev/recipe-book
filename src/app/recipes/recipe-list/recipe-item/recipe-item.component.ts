import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Recipe} from '../../recipe.model';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;

  // @Output() recipeData = new EventEmitter<void>();

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
  }

  //
  onRecipeItemClick() {
    // this.recipeData.emit();
    this.recipeService.recipeSelected.emit(this.recipe);
    console.log('Emiting recipeSelected...');
    console.log(this.recipe);


  }


}
