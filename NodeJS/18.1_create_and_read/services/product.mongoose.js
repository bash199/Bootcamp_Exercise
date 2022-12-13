import {Product} from "../models/product.model.js";

export const addProdctToMongoose = async (body) => {
   const product = await Product.create(body);
   return product;
};

export const getAllProductsFromMongoose = async () => {
   const allProducts = await Product.find({});
   return allProducts;
};

export const getAProductFromMongoose = async (body) => {
   const allProducts = await Product.findOne(body);
   return allProducts;
};

export const getActiveProductsFromMongoose = async () => {
   const allProducts = await Product.find( { isActive: true } );
   return allProducts;
};

export const getByPriceRangeFromMongoose = async (min,max) => {
   const allProducts = await Product.find( { "details.price" : { $gt:Number(min) , $lt:Number(max) } } );
   return allProducts;
};