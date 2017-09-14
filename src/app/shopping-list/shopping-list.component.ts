import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs/Subscription";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from './shopping-list.sevice';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onEditItem(id: number) {
    this.shoppingListService.startedEditing.next(id);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
