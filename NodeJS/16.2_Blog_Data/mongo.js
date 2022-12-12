import {MongoClient, ObjectId} from "mongodb";

const connectionURL = "mongodb://127.0.0.1:27017";
const dbName = "blogPosts";

const client = new MongoClient(connectionURL);

async function main() {
   // Use connect method to connect to the server
   await client.connect();
   console.log("Connected successfully to server");
   const db = client.db(dbName);
   const users = db.collection("users");
   const posts = db.collection("posts");
   const comments = db.collection("comments");

   // the following code examples can be pasted here...
   const insertUsers = await users.insertMany([
      {
         name: "ahmad",
         lastName: "mohtaseb",
         email: "ahmad@gmail.com",
         posts: [],
      },
      {
         name: "alaa",
         lastName: "shalan",
         email: "alaa@gmail.com",
         posts: [],
      },
   ]);
   // console.log('Inserted Users =>', insertUsers);
   const insertPosts = await posts.insertMany([
      {
         title: "the cat ate my paper work",
         text: "loerradf aasf asdf sedfds fd arfasf ",
         comments: [],
      },
      {
         title: "the dog ate my paper work",
         text: "loerradf aasf asdf sedfds fd arfasf ",
         comments: [],
      },
   ]);

   await users.updateOne(
     {_id: ObjectId(insertUsers.insertedIds["1"])},
      {
         $set: {
            posts: [insertPosts.insertedIds["0"], insertPosts.insertedIds["1"]],
         },
      }
   );
   // console.log('Inserted Posts =>', insertPosts.insertedIds["0"]);
   const insertComments = await comments.insertMany([
      {
         text: "hahaha what a bad luck",
      },
      {
         text: "it happend to me too so i shot the hell out of it",
      },
   ]);
   await posts.updateOne(
      {_id: ObjectId(insertPosts.insertedIds["0"])},
      {
         $set: {
            comments: [
               insertComments.insertedIds["0"],
               insertComments.insertedIds["1"],
         ]
         },
      }
   );
  console.log(await users.findOne({ _id : ObjectId(insertUsers.insertedIds["1"]) } ) )
  console.log(await posts.findOne( { _id : ObjectId(insertPosts.insertedIds["0"]) } ) )
  console.log(await posts.findOne( { _id : ObjectId(insertPosts.insertedIds["1"]) } ) )
  console.log(await comments.findOne({ _id : ObjectId(insertComments.insertedIds["0"]) } ) )
  console.log(await comments.findOne({ _id : ObjectId( insertComments.insertedIds["1"]) } ) )

}
// main();
