import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit , OnDestroy{
  ingredients!: Ingredient[];
  private igChangeSub : Subscription | undefined;


  constructor(private slService : ShoppingListService) {}
  

  ngOnInit(){ 
    this.ingredients = this.slService.getIngredients();
    this.igChangeSub =  this.slService.ingredientsChanged.subscribe(
      (ingredient : Ingredient[]) => {
        this.ingredients = this.ingredients;
      }

    );
  }
   
  ngOnDestroy(): void {
    this.igChangeSub?.unsubscribe();
  }


}
