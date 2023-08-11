"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.getProductById = exports.createProduct = exports.getAllProducts = void 0;
const products = [];
const getAllProducts = (req, res) => {
    res.json(products);
};
exports.getAllProducts = getAllProducts;
let productIdCounter = 1; // Menyimpan id terakhir yang digunakan
const createProduct = (req, res) => {
    const { name, price } = req.body;
    const newProduct = { id: productIdCounter++, name, price };
    products.push(newProduct);
    res.status(201).json(newProduct);
};
exports.createProduct = createProduct;
const getProductById = (req, res) => {
    const productId = parseInt(req.params.id); // Mengonversi string ke angka
    const product = products.find(item => item.id === productId);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({ message: 'Product not found' });
    }
};
exports.getProductById = getProductById;
const updateProduct = (req, res) => {
    const productId = parseInt(req.params.id); // Mengonversi string ke angka
    const updatedProduct = req.body;
    const index = products.findIndex(item => item.id === productId);
    if (index !== -1) {
        products[index] = Object.assign(Object.assign({}, products[index]), updatedProduct);
        res.json(products[index]);
    }
    else {
        res.status(404).json({ message: 'Product not found' });
    }
};
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => {
    const productId = parseInt(req.params.id); // Mengonversi string ke angka
    const index = products.findIndex(item => item.id === productId);
    if (index !== -1) {
        const deletedProduct = products.splice(index, 1);
        res.json(deletedProduct[0]);
    }
    else {
        res.status(404).json({ message: 'Product not found' });
    }
};
exports.deleteProduct = deleteProduct;
