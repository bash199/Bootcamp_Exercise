import {Router} from "express";
import {addProduct, getAllProducts,getBy} from "../controllers/product.controller.js"

export const indexProduct = Router();

indexProduct.post("/product", addProduct);
indexProduct.get("/allproducts", getAllProducts);
indexProduct.get("/product" ,getBy)


