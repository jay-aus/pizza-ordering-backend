// src/strategies/SouthbankPizzaPriceCalculator.ts

import { PizzaPriceCalculator } from './PizzaPriceCalculator';
import { Pizza } from '../menuData';

export class SouthbankPizzaPriceCalculator implements PizzaPriceCalculator {
  calculatePrice(pizzas: Pizza[], orders: { pizza: string; quantity: number }[]): number {
    let totalPrice = 0;

    for (const order of orders) {
      const pizza = pizzas.find(item => item.name === order.pizza);
      if (pizza) {
        totalPrice += pizza.price * order.quantity;
      }
    }

    return totalPrice;
  }
}
