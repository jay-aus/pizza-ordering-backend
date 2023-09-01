// src/index.ts

import express from 'express';
import { processOrder } from './orderProcessor';
import { locations } from '../src/constants/locations';
const cors = require('cors');

const app = express();
const port = 3001;
app.use(cors());

app.use(express.json());

app.post('/calculateTotalPrice', processOrder);

app.get('/locations', (req, res) => {
  res.json(locations);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
