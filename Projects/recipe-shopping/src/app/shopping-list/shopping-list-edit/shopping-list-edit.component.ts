import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild("nameInput") newNameRef: ElementRef;
  @ViewChild("amountInput") newAmountRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addIngredient(){
    const ingName = this.newNameRef.nativeElement.value;
    const ingAmount = this.newAmountRef.nativeElement.value;
    const newIng = new Ingredient(ingName, ingAmount);
    this.shoppingListService.addIngredient(newIng);
  }

}
