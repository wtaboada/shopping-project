import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';

import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from '../shopping-list.sevice';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: 'shopping-edit.component.html'
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient(){
    const nameIng = this.nameInput.nativeElement.value;
    const amountIng = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(nameIng, amountIng);
    this.shoppingListService.createIngredient(newIngredient);
  }

}
