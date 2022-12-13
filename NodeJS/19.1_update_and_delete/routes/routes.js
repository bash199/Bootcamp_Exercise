import {Router} from "express";
import {
   addProduct,
   getAllProducts,
   getBy,
   updateById,
   deletebyId,
   deleteAllProducts,
} from "../controllers/product.controller.js";

export const indexProduct = Router();

indexProduct.post("/product", addProduct);
indexProduct.get("/allproducts", getAllProducts);
indexProduct.get("/product", getBy);
indexProduct.put("/product/:id", updateById);
indexProduct.delete("/product/:id", deletebyId);
indexProduct.delete("/product", deleteAllProducts);
