import { Ingredient } from 'src/app/models/ingredients.model';
export class Products {
  name: string;
  price: number;
  description: string;
  photo: string;
  ingredients: Ingredient[];
}
