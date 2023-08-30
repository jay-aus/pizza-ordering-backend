// src/strategies/PizzaPriceCalculator.ts

import { Pizza } from '../menuData';

export interface PizzaPriceCalculator {
  calculatePrice(pizzas: Pizza[], orders: { pizza: string; quantity: number }[]): number;
}
