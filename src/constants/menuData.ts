// src/menuData.ts

export interface Pizza {
  name: string;
  toppings: string[];
  price: number;
}

export const prestonMenu: Pizza[] = [
  { name: 'Capricciosa', toppings: ['Cheese', 'Ham', 'Mushrooms', 'Olives'], price: 20 },
  { name: 'Mexicana', toppings: ['Cheese', 'Salami', 'Capsicum', 'Chilli'], price: 18 },
  { name: 'Margherita', toppings: ['Cheese', 'Spinach', 'Ricotta', 'Cherry Tomatoes'], price: 22 },
];

export const southbankMenu: Pizza[] = [
  { name: 'Capricciosa', toppings: ['Cheese', 'Ham', 'Mushrooms', 'Olives'], price: 25 },
  { name: 'Vegetarian', toppings: ['Cheese', 'Mushrooms', 'Capsicum', 'Onion', 'Olives'], price: 17 },
];
