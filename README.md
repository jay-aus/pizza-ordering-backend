# Pizza Ordering Backend
This is a backend application that handles pizza orders and calculates the total price based on the selected location and pizza orders. It uses Express.js for routing and processing incoming requests.

# Features
Calculate total price based on the location and pizza orders.
Support for two locations: Preston and Southbank.
Modular architecture using TypeScript.

# Getting Started
Clone the Repository:

git clone https://github.com/your-username/pizza-ordering-backend.git
cd pizza-ordering-backend


# Install the required npm dependencies:

npm install

# Start the Express server:

npm start


# Making Requests:

Use a tool like curl or Postman to make POST requests to the /calculateTotalPrice endpoint with the appropriate JSON body.

For example, using curl:

curl -X POST -H "Content-Type: application/json" -d '{
  "location": "Preston",
  "orders": [
    { "pizza": "Capricciosa", "quantity": 2 },
    { "pizza": "Mexicana", "quantity": 1 }
  ]
}' http://localhost:3001/calculateTotalPrice


# Project Structure
The project follows a modular structure for better organization:

src/
menuData.ts: Contains the menu data for different pizzas and pizzerias.
orderProcessor.ts: Handles the order processing logic, validation, and price calculation.
pizzaPriceCalculator/
PizzaPriceCalculatorFactory.ts: Factory class to create pizza price calculator instances.
PrestonPizzaPriceCalculator.ts: Calculates prices for pizzas in Preston.
SouthbankPizzaPriceCalculator.ts: Calculates prices for pizzas in Southbank.
PizzaPriceCalculator.ts: Interface for pizza price calculation.
inputValidator.ts: Validates the input data for orders.
index.ts: Main entry point for the Express server and routing.

# TO DO
Implement logic for pizza toppings; Add test cases