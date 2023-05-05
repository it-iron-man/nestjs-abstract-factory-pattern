import { Dish } from './abstractProducts/dish.interface';
import { Drink } from './abstractProducts/drink.interface';
import { Ingredient } from './abstractProducts/ingredient.interface';

export abstract class RestaurantFactory {
  abstract createDish(): Dish;
  abstract createDrink(): Drink;
  abstract createIngredient(): Ingredient;
}
