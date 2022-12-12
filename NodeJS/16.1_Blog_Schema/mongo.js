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
},
{
   title:'post title',
   text:'text',
   users:[
      'userId1','userId2','userId3'
   ],
   comments:[
      'commentId1','commentId2','commentId3'
   ]
}
`

`
users collection:
{
   name:'username',
   lastName:'userLastName',
   posts:[
      'postId1','postId2','postId3'
   ]
},
{
   name:'username',
   lastName:'userLastName',
   posts:[
      'postId1','postId2','postId3'
   ]
}
`

`
comments collection:
{
   text:'some comment text',

},
{
   text:'some comment text',

}
`

