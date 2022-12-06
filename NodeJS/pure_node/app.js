import http from "http";
import {readFileSync} from "fs";

http
   .createServer((req, res) => {
      console.log(req.url);
      if (req.url === "/") {
         res.writeHead(200);
         const data = readFileSync("index.html");
         res.write(data);
      } else if (req.url === "/raw-html") {
         res.writeHead(200);
         res.write("<h1>Welcome</h1>"); //write a response to the client
      } else if (req.url === "/users") {
         res.writeHead(200);
         const data = readFileSync("data.json");
         res.write(data); //write a response to the client
      } else if (req.url === "/index.css") {
         res.writeHead(200);
         const data = readFileSync("index.css");
         res.write(data); //write a response to the client
      }
      res.end(); //end the response
   })
   .listen(8080, () => {
      console.log("Server is running on http://localhost:8080");
   });
