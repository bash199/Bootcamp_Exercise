import {readFile, writeFile, readFileSync} from "fs";
import uniqid from "uniqid";
import path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const dbPath = path.join(path.dirname(__dirname), "/db/movies.json");

export const getAllMovies = (req, res) => {
   try {
      readFile(dbPath, (err, content) => {
         if (err) throw err;
         res.status(200).send(JSON.parse(content));
      });
   } catch (error) {
      res.status(404).send(error);
   }
};

export const getMovieById = (req, res, next) => {
   try {
      readFile(dbPath, (err, content) => {
         if (err) throw err;
         const movies = JSON.parse(content);
         const {id} = req.params;
         const movie = movies.find((movie) => {
            return movie.id === id;
         });
         if (!movie) {
            next(`${id} Not Found`);
            res.status(404).send(`id: ${id} Not Found`);
         }
         res.status(200).send(movie);
      });
   } catch (error) {
      res.status(404).send(error);
   }
};

const saveMovies = (notes) => {
   const dataJSON = JSON.stringify(notes);
   writeFile(dbPath, dataJSON, (err) => {
      console.log(err);
   });
};

const loadMovies = () => {
   try {
      const dataBuffer = readFileSync(dbPath);
      const dataJSON = dataBuffer.toString();
      return JSON.parse(dataJSON);
   } catch (error) {
      console.log(error);
      return [];
   }
};

export const createMovie = (req, res) => {
   try {
      const oldMovies = loadMovies();
      const id = uniqid();
      const newMovie = {...req.body, id};
      const newMovies = [...oldMovies, newMovie];
      saveMovies(newMovies);
      res.status(200).send(newMovie);
   } catch (error) {
      res.send(error);
   }
};

export const deleteMovie = (req, res) => {
   try {
      const {id} = req.params;
      const movies = loadMovies();
      const oldMovies = movies.filter((movie) => movie.id !== id);
      const deletedMovie = movies.find((movie) => movie.id === id);
      saveMovies(oldMovies);
      res.status(200).send(deletedMovie);
   } catch (error) {
      res.status(404).send(`wrong id / not found, ${error}`);
   }
};

export const updateMovieByid = (req, res) => {
   try {
      const movies = loadMovies();
      const {id} = req.params;
      const newMovies = movies.map((movie) => {
         return movie.id === id ? {...movie, ...req.body} : movie;
      });
      const movie = {...req.body, id};
      saveMovies(newMovies);
      res.status(201).send(movie);
   } catch (error) {
      res.status(404).send(error);
   }
};

// 🚀
// TEAM ROCKET
