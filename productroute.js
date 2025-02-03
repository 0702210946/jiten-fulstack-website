const express = require('express');
const router = express.Router();

// Mock Product Data (Replace with actual database logic)
const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
];

// Get all products
router.get('/', (req, res) => {
  res.json(products);
});

// Get a single product by id
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send('Product not found');
  res.json(product);
});

// Export the router
module.exports = router;
