import { Ingredient } from '../../abstractProducts/ingredient.interface';

export class VegetarianIngredient implements Ingredient {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getInfo(): string {
    return `Vegetarian ingredient ${this.name}, price: ${this.price}`;
  }
}
