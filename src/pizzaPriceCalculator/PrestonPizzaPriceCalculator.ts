// src/strategies/PrestonPizzaPriceCalculator.ts

import { PizzaPriceCalculator } from './PizzaPriceCalculator';
import { Pizza } from '../constants/menuData';

export class PrestonPizzaPriceCalculator implements PizzaPriceCalculator {
  calculatePrice(pizzas: Pizza[], orders: { pizza: string; quantity: number }[]): number {
    let totalPrice = 0;
    console.log(pizzas);
    for (const order of orders) {
      const pizza = pizzas.find(item => item.name === order.pizza);
      if (pizza) {
        console.log(pizza);
        totalPrice += pizza.price * order.quantity;
        console.log(totalPrice);
        // TO DO - add proper logic to fix the toppings calculation - replicate the same for Southbank
        /*if (pizza.toppings.includes('Cheese') || pizza.toppings.includes('Capsicum') || pizza.toppings.includes('Salami') || pizza.toppings.includes('Olives')) {
            console.log('Toppings: ', pizza.toppings);
          totalPrice += order.quantity; // Additional toppings charge
        } */
      }
    }

    return totalPrice;
  }
}
