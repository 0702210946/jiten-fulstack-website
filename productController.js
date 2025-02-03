const Product = require('../models/Product'); // Assuming you're using a Sequelize model

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();  // Example with Sequelize ORM
        res.json(products);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

// Add a new product
exports.addProduct = async (req, res) => {
    try {
        const { name, description, price } = req.body;
        const newProduct = await Product.create({ name, description, price });
        res.json(newProduct);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

// Edit an existing product
exports.editProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) return res.status(404).json({ msg: 'Product not found' });

        const { name, description, price } = req.body;
        product.name = name || product.name;
        product.description = description || product.description;
        product.price = price || product.price;

        await product.save();
        res.json(product);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) return res.status(404).json({ msg: 'Product not found' });

        await product.destroy();
        res.json({ msg: 'Product deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

// Get the total count of products
exports.getProductCount = async (req, res) => {
    try {
        const count = await Product.count();
        res.json({ count });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};
