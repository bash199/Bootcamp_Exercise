import {model} from "mongoose";
import {productSchema} from "./product.schema.js";

export const Product = model("Product", productSchema);
