//? use findMyRestaurant

//? db.resturants.insertOne({name:'chang mai',address:{city:'zichron yakov',street:'hamalka 19',coordinates:[-77.564,40.677]},cuisine:'chinese',kosher:false,reviews:[{date:new Date(),score:5/5},{date:new Date(),score:4/5},{date:new Date(),score:3/5} ] })
//* { acknowledged: true,insertedId: ObjectId("6395db876c88047d38cf007e")}

//? db.resturants.insertOne({name: 'japanika', address: { city: 'nahariya',street: 'regba', coordinates: [ -32.564, 25.677 ]},cuisine: 'japanese',kosher: true,reviews:[ { date: "2022-12-10", score: 0.8 },{ date: "2022-12-8", score: 1 },{ date: "2022-12-9", score: 0.9 }]})
//* { acknowledged: true,insertedId: ObjectId("6395df836c88047d38cf007f")} 

//? db.resturants.insertOne( {name: 'chunkzoko',address: { city: 'nahariya', street: 'regba', coordinates: [ -85.523, 85 ] },cuisine: 'Vietnamese', kosher: false, reviews: [ { date: '2022-3-3', score: 0.8 }   { date: '2021-8-8', score: 0.5 },   { date: '2022-8-06', score: 0.2 } ]})

//* { acknowledged: true,insertedId: ObjectId("6395e1fd6c88047d38cf0081")} 

//* db.resturants.find()
//* [
//*   { _id: ObjectId("6395d3d66c88047d38cf007d") },
//*   {
//*     _id: ObjectId("6395db876c88047d38cf007e"),
//*     name: 'chang mai',
//*     address: {
//*       city: 'zichron yakov',
//*       street: 'hamalka 19',
//*       coordinates: [ -77.564, 40.677 ]
//*     },
//*     cuisine: 'chinese',
//*     kosher: false,
//*     reviews: [
//*       { date: ISODate("2022-12-11T13:30:47.496Z"), score: 1 },
//*       { date: ISODate("2022-12-11T13:30:47.496Z"), score: 0.8 },
//*       { date: ISODate("2022-12-11T13:30:47.496Z"), score: 0.6 }
//*     ]
//*   },
//*   {
//*     _id: ObjectId("6395df836c88047d38cf007f"),
//*     name: 'japanika',
//*     address: {
//*       city: 'nahariya',
//*       street: 'regba',
//*       coordinates: [ -32.564, 25.677 ]
//*     },
//*     cuisine: 'japanese',
//*     kosher: true,
//*     reviews: [
//*       { date: '2022-12-10', score: 0.8 },
//*       { date: '2022-12-8', score: 1 },
//*       { date: '2022-12-9', score: 0.9 }
//*     ]
//*   },
//*   {
//*     _id: ObjectId("6395dfdf6c88047d38cf0080"),
//*     name: 'macBurger',
//*     address: { city: 'nahariya', street: 'regba', coordinates: [ -32.564, 58 ] },
//*     cuisine: 'American',
//*     kosher: true,
//*     reviews: [
//*       { date: '2022-7-3', score: 0.8 },
//*       { date: '2021-12-8', score: 0.5 },
//*       { date: '2022-10-6', score: 0.2 }
//*     ]
//*   },
//*   {
//*     _id: ObjectId("6395e1fd6c88047d38cf0081"),
//*     name: 'chunkzoko',
//*     address: { city: 'nahariya', street: 'regba', coordinates: [ -85.523, 85 ] },
//*     cuisine: 'Vietnamese',
//*     kosher: false,
//*     reviews: [
//*       { date: '2022-3-3', score: 0.8 },
//*       { date: '2021-8-8', score: 0.5 },
//*       { date: '2022-8-06', score: 0.2 }
//*     ]
//*   }
//* ]


// db.resturants.updateOne({ '_id': ObjectId("6395dfdf6c88047d38cf0080") },{$set:{reviews:[{ date: '1997-3-3', score: 0.8 },{ date: '2001-10-2', score: 0.8 },{ date: '2000-9-6', score: 0.8 }]}})