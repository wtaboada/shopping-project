import {Component, OnInit, ViewChild, Output, EventEmitter, ElementRef} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: 'shopping-edit.component.html'
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() createdIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addIngredient(){
    const nameIng = this.nameInput.nativeElement.value;
    const amountIng = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(nameIng, amountIng);
    this.createdIngredient.emit(newIngredient);
  }

}
