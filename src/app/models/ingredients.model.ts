import { environment } from '../../environments/environment';

export class Ingredient {
  constructor(
    public name: string,
    public inStock: boolean,
    public id?: string,
    public image?: string,
    public type?: string,
    public description?: string
  ) {}

}
