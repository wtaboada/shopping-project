import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";

import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from '../shopping-list.sevice';
import {noUndefined} from "@angular/compiler/src/util";
import {isUndefined} from "util";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: 'shopping-edit.component.html'
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe(
        (index: number) => {
          this.editMode = true;
          this.editedItemIndex = index;
          this.editedItem = this.shoppingListService.getIngredient(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        }
      );
  }

  onSubmit(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shoppingListService.createIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onDelete() {
      this.shoppingListService.deleteIngredient(this.editedItemIndex);
      this.onClear();
  }

  onClear() {
    this.editMode = false;
    this.slForm.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
