import {readFile, writeFile, readFileSync} from "fs";
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
      const movies = loadMovies();
      const newMovies = [...movies, req.body];
      saveMovies(newMovies);
      res.status(200).send(req.body);
   } catch (error) {
      res.send(error);
   }
};

export const deleteMovie = (req, res) => {
   try {
      const {id} = req.params;
      const movies = loadMovies();
      const newMovies = movies.filter((movie) => {
         return movie.id !== id;
      });
      saveMovies(newMovies);
      res.status(200).send(newMovies);
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
      saveMovies(newMovies);
      res.status(201).send(res.body);
   } catch (error) {
      res.status(404).send(error);
   }
};

// 🚀
// TEAM ROCKET
