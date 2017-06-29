import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: 'recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-superJumbo.jpg'),
    new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-superJumbo.jpg')
  ];
  selectedRecipe: Recipe = this.recipes[0];
  @Output() showDetail = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelectedRecipe(recipe: Recipe){
    this.selectedRecipe = recipe;
    this.showDetail.emit(this.selectedRecipe);
  }

}
