import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Ingredient } from 'src/app/models/ingredients.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  public ingredient: Ingredient;
  constructor(private httpClient: HttpClient) {}

  getIngredients() {
    const url = `${base_url}/ingredient`;
    return this.httpClient.get(url);
  }
}
