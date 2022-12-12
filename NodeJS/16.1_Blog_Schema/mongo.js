import {MongoClient} from "mongodb";

const connectionURL = "mongodb://127.0.0.1:27017";
const dbName = "blogPosts";

const client = new MongoClient(connectionURL);
const db = client.db(dbName);



`
posts collection:
{
   title:'post title',
   text:'text',
   comments:[
      'commentId1','commentId2','commentId3'
   ]
}
`

`
comments collection:
{
   text:'some comment text',

}
`

