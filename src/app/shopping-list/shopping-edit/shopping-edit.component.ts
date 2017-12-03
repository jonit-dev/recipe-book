import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppinglistService} from '../services/shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  // @Output() ingredientData = new EventEmitter<Ingredient>();


  constructor(private shoppingListService: ShoppinglistService) {
  }

  ngOnInit() {
  }

  addShoppingList() {

    this.shoppingListService.addToShoppingList(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value)

    // this.ingredientData.emit({
    //   name: this.nameInput.nativeElement.value,
    //   amount: this.amountInput.nativeElement.value
    // });
  }

}
