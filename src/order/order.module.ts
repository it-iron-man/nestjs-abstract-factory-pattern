import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { VegetarianRestaurant } from 'src/restaurant/vegetarianRestaurant';
import { RestaurantFactory } from '../restaurant/restaurantFactory';

@Module({
  providers: [
    OrderService,
    { provide: RestaurantFactory, useClass: VegetarianRestaurant },
  ],

  controllers: [OrderController],
})
// eslint-disable-next-line prettier/prettier
export class OrderModule { }
