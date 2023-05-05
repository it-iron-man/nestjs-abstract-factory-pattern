import { Dish } from './abstractProducts/dish.interface';
import { Drink } from './abstractProducts/drink.interface';
import { Ingredient } from './abstractProducts/ingredient.interface';
import { MeatDish } from './concreteProducts/meatRestaurant/meatDish';
import { MeatIngredient } from './concreteProducts/meatRestaurant/meatIngredient';
import { RestaurantFactory } from './restaurantFactory';
import { Soda } from './concreteProducts/meatRestaurant/soda';

export class MeatRestaurant extends RestaurantFactory {
  createDish(): Dish {
    return new MeatDish('Meat Dish', 15, 'beef');
  }

  createDrink(): Drink {
    return new Soda('Soda', 2, 'lemon');
  }

  createIngredient(): Ingredient {
    return new MeatIngredient('Beef', 8);
  }
}
