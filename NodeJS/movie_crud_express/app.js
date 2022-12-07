import express from "express";
import {MoviesRouter} from "./routes/movies.routes.js";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use("/api", MoviesRouter);
app.listen(PORT, console.log("server is running on " + PORT));
