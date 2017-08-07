import {Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Recipe } from "../recipe.model";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.recipe = this.recipeService.getRecipe(this.route.snapshot.params['id']);
  }

  toShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
