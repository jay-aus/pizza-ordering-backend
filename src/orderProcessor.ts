// src/orderProcessor.ts

import { locations } from './constants/locations';
import { PizzaPriceCalculatorFactory } from './pizzaPriceCalculator/PizzaPriceCalculatorFactory';
import { validateOrderInput } from './validator/inputValidator';
import { Request, Response } from 'express';

export function processOrder(req: Request, res: Response): void {
  
  const { location, orders } = req.body;
  console.log("IN order processor");
  const selectedLocation = locations.find(loc => loc.name === location);
  if (!selectedLocation || !validateOrderInput(location, orders)) {
    res.status(400).json({ error: 'Invalid input' });
    return;
  }

  const selectedMenu = PizzaPriceCalculatorFactory.create(location);
  if (!selectedMenu) {
    res.status(500).json({ error: 'Unable to create calculator' });
    return;
  }

  const totalPrice = selectedMenu.calculatePrice(selectedLocation.menu, orders);
  console.log('totalPrice: ', totalPrice);

  res.json({ totalPrice });
}
