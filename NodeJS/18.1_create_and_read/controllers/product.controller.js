import {
   addProdctToMongoose,
   getAllProductsFromMongoose,
   getAProductFromMongoose,
   getActiveProductsFromMongoose,
   getByPriceRangeFromMongoose,
} from "../services/product.mongoose.js";

export const addProduct = async (req, res) => {
   const newProduct = await addProdctToMongoose(req.body);
   res.status(201).send(newProduct);
};

export const getAllProducts = async (req, res) => {
   const allProducts = await getAllProductsFromMongoose();
   res.status(200).send(allProducts);
};

const getProduct = async (req, res) => {
   const Product = await getAProductFromMongoose(req.body);
   res.status(200).send(Product);
};

const getActiveProducts = async (req, res) => {
   const Product = await getActiveProductsFromMongoose();
   res.status(200).send(Product);
};

const getByPriceRange = async (req, res) => {
   const Product = await getByPriceRangeFromMongoose(
      req.query.min,
      req.query.max
   );
   res.status(200).send(Product);
};

export const getBy = (req, res) => {
   if (req.query.min && req.query.max) {
   return  getByPriceRange(req, res);

   } else if (req.query.active === "true") {
      return getActiveProducts(req, res);
   }
   return getProduct(req, res);
};
