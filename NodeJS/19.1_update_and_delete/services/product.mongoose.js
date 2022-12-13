import {Product} from "../models/product.model.js";

export const addProdctToMongoose = async (body) => {
   const product = await Product.create(body);
   return product;
};

export const getAllProductsFromMongoose = async () => {
   const allProducts = await Product.find({});
   if (allProducts.length == 0) {
      return "No Products Found";
   } else {
      return allProducts;
   }
};

export const getAProductFromMongoose = async (body) => {
   const allProducts = await Product.findOne(body);
   if (allProducts) {
      return allProducts;
   } else {
      return "No Product Find With This Id";
   }
};

export const getActiveProductsFromMongoose = async () => {
   const allProducts = await Product.find({isActive: true});
   return allProducts;
};

export const getByPriceRangeFromMongoose = async (min, max) => {
   const allProducts = await Product.find({
      "details.price": {$gt: Number(min), $lt: Number(max)},
   });
   return allProducts;
};

export const updateProductFromMongoose = async (id, active, discount) => {
   const product = await Product.updateOne(
      {_id: id},
      {$set: {isActive: active, "details.discount": discount ? discount : 0}}
   );
   return product;
};

export const deleteProductFromMongoose = async (id) => {
   const product = await Product.deleteOne({_id: id});
   if (product.deletedCount === 1) {
      console.log("Successfully deleted one document.");
   } else {
      console.log("No documents matched the query. Deleted 0 documents.");
   }
   return product;
};

export const deleteAllProductsFromMongoose = async () => {
   const product = await Product.deleteMany({});
   const message = "Deleted " + product.deletedCount + " documents";
   return message;
};
