import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredients.model';
import { IngredientService } from './ingredient.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
})
export class IngredientComponent implements OnInit {
  constructor(private ingredientService: IngredientService) {}

  public ingredients: Ingredient[] = [];

  ngOnInit(): void {
    this.getIngredients();
  }

  getIngredients() {
    return this.ingredientService.getIngredients().subscribe({
      next: (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
        console.log('🚀 debug ingredients', this.ingredients);
      },
    });
  }
}
