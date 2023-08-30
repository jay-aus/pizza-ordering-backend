// src/index.ts

import express from 'express';
import { processOrder } from './orderProcessor';

const app = express();
const port = 3001;

app.use(express.json());

app.post('/calculateTotalPrice', processOrder);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
