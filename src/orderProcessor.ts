// src/orderProcessor.ts

import { prestonMenu, southbankMenu } from './menuData';
import { PizzaPriceCalculatorFactory } from './pizzaPriceCalculator/PizzaPriceCalculatorFactory';
import { validateOrderInput } from './inputValidator';
import { Request, Response } from 'express';

export function processOrder(req: Request, res: Response): void {
  const { location, orders } = req.body;

  if (!validateOrderInput(location, orders)) {
    res.status(400).json({ error: 'Invalid input' });
    return;
  }

  const selectedMenu = PizzaPriceCalculatorFactory.create(location);
  const totalPrice = selectedMenu.calculatePrice(location === 'Preston' ? prestonMenu : southbankMenu, orders);

  res.json({ totalPrice });
}
