import { Dish } from './abstractProducts/dish.interface';
import { Drink } from './abstractProducts/drink.interface';
import { FreshJuice } from './concreteProducts/vegetarianRestaurant/freshJuice';
import { Ingredient } from './abstractProducts/ingredient.interface';
import { RestaurantFactory } from './restaurantFactory';
import { VegetarianDish } from './concreteProducts/vegetarianRestaurant/vegetarianDish';
import { VegetarianIngredient } from './concreteProducts/vegetarianRestaurant/vegetarianIngredient';

export class VegetarianRestaurant extends RestaurantFactory {
  createDish(): Dish {
    return new VegetarianDish('Vegetarian Dish', 10, 'tofu');
  }

  createDrink(): Drink {
    return new FreshJuice('Fresh Juice', 5, 'orange');
  }

  createIngredient(): Ingredient {
    return new VegetarianIngredient('Tofu', 3);
  }
}
