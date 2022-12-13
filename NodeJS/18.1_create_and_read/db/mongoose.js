import {connect, set} from "mongoose";
set("strictQuery", true);
connect(
   "mongodb://127.0.0.1:27017/e-commerce-api",
   (error, mongoConnection) => {
      // console.log("connected to server...");
      if (error) {
         console.log(error);
      }
      if (!process.env.NODE_ENV) {
         const {host, port, name} = mongoConnection;
         console.log({host, port, name});
      }
   }
);
