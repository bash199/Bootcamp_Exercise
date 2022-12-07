import {Router} from "express";
import {
   getAllMovies,
   getMovieById,
   createMovie,
   deleteMovie,
   updateMovieByid,
} from "../controllers/utils.js";

export const MoviesRouter = Router();

MoviesRouter.get("/movies", getAllMovies);
MoviesRouter.post("/movies", createMovie);
MoviesRouter.get("/movies/:id", getMovieById);
MoviesRouter.delete("/movies/:id", deleteMovie);
MoviesRouter.put("/movies/:id", updateMovieByid);
