import express from "express";
import cors from "cors";
import {apiRoutes} from "./Routes/apiRoutes.js";

const app = express();
const PORT = 8000;
app.use(cors());
app.use("/api", apiRoutes);

app.listen(PORT, () => {
   console.log("Running on port: " + PORT);
});
