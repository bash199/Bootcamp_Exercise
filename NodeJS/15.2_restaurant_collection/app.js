
//? Q1
// 1.1 – db.resturants.find()

// 1.2 – db.resturants.find({cuisine: 'japanese'})

// 1.3 - db.resturants.find({kosher: true})

// 1.4 – db.resturants.find({'address.city':'zichron yakov'})

//1.5 – db.resturants.findOne({'address.city':'nahariya','address.street':'regba'})

//1.6 –  db.resturants.findOne({'address.coordinates':{$in:  [ -32.564, 25.677 ]}})

//1.7 – db.resturants.find().sort({name:1})

// 1.8 -  db.resturants.find().sort({'address.city':1})

// 1.9 - db.resturants.updateOne({'_id': ObjectId("6395e1fd6c88047d38cf0081")},{$set:{name:'bobo'}})

// 1.10 - db.resturants.updateOne({'_id': ObjectId("6395e1fd6c88047d38cf0081")},{$push :{"reviews": { date: '2020-02-02', score: 1 }}})

// 1.11 -db.resturants.updateMany({},{$set:{kosher:true} })

// 1.12 - db.resturants.remove({'_id': ObjectId("6395d3d66c88047d38cf007d")})

// 1.13 -  db.resturants.remove({})


//? Q2 

//* 2.3 - Write a MongoDB query to print all restaurant names.
// 2.1 - db.resturants.find().forEach( function(myDoc) { print( "name: " + myDoc.name ); } );

//* 2.3 - Write a MongoDB query to print all restaurant cities
// 2.2 - db.resturants.find().forEach( function({address}) { print( "city: " + address.city ); } );

//* 2.3 - Write a MongoDb query to print all restaurant coordinate
// 2.3 - db.resturants.find().forEach( function(myDoc) { print( " resturant coordinates: " + myDoc.address.coordinates ); } );

//? Q3 

//* 3.1 - Query for restaurant names that start with a specific alphabet
// 3.1 -  db.resturants.find({ name: { $regex: /j/ } })

//* 3.2 - Query how many documents you have from the restaurant collection.
// 3.2 - db.resturants.countDocuments()

//* 3.3 - Write a MongoDb query to get restaurants that include reviews from a specific date.
// 3.3 -  db.resturants.find( { 'reviews.date':'2022-3-3' } )


//? Q4 

//* 4.1- Write a mongoDb query to display all restaurants average score
// 4.1- db.resturants.aggregate( { $project : { _id :'$name', reviewAvg :{$avg: { $map:{ input:'$reviews.score', as:'i',in: '$$i' } } } } } )

//* 4.2 - Write a MongoDB query to display a specific restaurant average score
// 4.2 - db.resturants.aggregate( { $project : { _id :'$name', reviewAvg :{$avg: { $map:{ input:'$reviews.score', as:'i',in: '$$i' } } } } },{ $limit : 1 } )



