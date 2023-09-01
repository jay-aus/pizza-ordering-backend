import { PrestonPizzaPriceCalculator } from '../pizzaPriceCalculator/PrestonPizzaPriceCalculator';
import { prestonMenu } from '../constants/menuData';

describe('PrestonPizzaPriceCalculator', () => {
  it('should calculate total price without additional toppings', () => {
    const calculator = new PrestonPizzaPriceCalculator();
    const orders = [
      { pizza: 'Capricciosa', quantity: 2 },
      { pizza: 'Mexicana', quantity: 1 },
    ];

    const totalPrice = calculator.calculatePrice(prestonMenu, orders);
    expect(totalPrice).toBe(20 * 2 + 18 * 1); // Assuming Capricciosa costs $20 and Mexicana costs $18
  });

  it('should calculate total price with additional toppings', () => {
    const calculator = new PrestonPizzaPriceCalculator();
    const orders = [
      { pizza: 'Capricciosa', quantity: 1 }, // 1 Capricciosa pizza with additional toppings
      { pizza: 'Mexicana', quantity: 3 },    // 3 Mexicanas without additional toppings
    ];

    const totalPrice = calculator.calculatePrice(prestonMenu, orders);
    expect(totalPrice).toBe((20) * 1 + 18 * 3); // Assuming $1 for additional toppings
  });

  // Add more test cases for various scenarios
});
