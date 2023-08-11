// src/controllers/productController.ts
import { Request, Response } from 'express';

const products: any[] = [];

export const getAllProducts = (req: Request, res: Response) => {
  res.json(products);
};

let productIdCounter = 1; // Menyimpan id terakhir yang digunakan

export const createProduct = (req: Request, res: Response) => {
  const { name, price } = req.body;
  const newProduct = { id: productIdCounter++, name, price };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

export const getProductById = (req: Request, res: Response) => {
  
    const productId = parseInt(req.params.id); // Mengonversi string ke angka
  const product = products.find(item => item.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

export const updateProduct = (req: Request, res: Response) => {
  
    const productId = parseInt(req.params.id); // Mengonversi string ke angka
  const updatedProduct = req.body;
  const index = products.findIndex(item => item.id === productId);
  if (index !== -1) {
    products[index] = { ...products[index], ...updatedProduct };
    res.json(products[index]);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

export const deleteProduct = (req: Request, res: Response) => {
  
    const productId = parseInt(req.params.id); // Mengonversi string ke angka
  const index = products.findIndex(item => item.id === productId);
  if (index !== -1) {
    const deletedProduct = products.splice(index, 1);
    res.json(deletedProduct[0]);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};
