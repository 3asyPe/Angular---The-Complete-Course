import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @Output() newIngredient = new EventEmitter<Ingredient>();
  @ViewChild("nameInput") newNameRef: ElementRef;
  @ViewChild("amountInput") newAmountRef: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(){
    this.newIngredient.emit(
      new Ingredient(this.newNameRef.nativeElement.value,
                     this.newAmountRef.nativeElement.value)
    );
  }

}
