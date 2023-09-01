// src/strategies/PizzaPriceCalculator.ts

import { Pizza } from '../constants/menuData';

export interface PizzaPriceCalculator {
  calculatePrice(pizzas: Pizza[], orders: { pizza: string; quantity: number }[]): number;
}
