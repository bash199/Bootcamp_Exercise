import express from "express";
// import { main } from "../16.1_Blog_Schema/mongo.js";
const app = express();
const port = 3000;

app.get("/numbers/:name", (req,res)=>{
   // main(req,res)
   res.send("success using get");
});

app.post("/numbers", (req, res) => {
   res.send("success using post");
});

app.put("/numbers", (req, res) => {
   res.send("success using put");
});

app.delete("/numbers", (req, res) => {
   res.send("success using delete");
});

app.listen(port, () => {
   console.log(` app listening on port ${port}`);
});

// import {MongoClient} from "mongodb";

// const connectionURL = "mongodb://127.0.0.1:27017";
// const dbName = "testDB";

// const client = new MongoClient(connectionURL);
// const db = client.db(dbName);

// export async function main(req, res) {
//    try {
//       const data = await db.collection("users").findOne({name: `${req.params.name}`});
//       res.send(data);
//    } catch (error) {
//       res.send(error);
//    }
// }
