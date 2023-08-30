// src/strategies/PizzaPriceCalculatorFactory.ts

import { PizzaPriceCalculator } from './PizzaPriceCalculator';
import { PrestonPizzaPriceCalculator } from './PrestonPizzaPriceCalculator';
import { SouthbankPizzaPriceCalculator } from './SouthbankPizzaPriceCalculator';

export class PizzaPriceCalculatorFactory {
  static create(location: string): PizzaPriceCalculator {
    if (location === 'Preston') {
      return new PrestonPizzaPriceCalculator();
    } else if (location === 'Southbank') {
      return new SouthbankPizzaPriceCalculator();
    }
    throw new Error(`No calculator found for location: ${location}`);
  }
}
