import {Router} from "express";
import {apiController} from "../controllers/controller.js";

export const apiRoutes = Router();

apiRoutes.get("/weather", apiController);
