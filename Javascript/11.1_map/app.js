//? You are getting an array of objects of the recent video releases from your database. (array below). We only care about the portion of data we are getting.
const newReleases = [
   {
   id: 70111470,
   title: "Die Hard",
   boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
   uri: "http://api.netflix.com/catalog/titles/movies/70111470",
   rating: [4.0],
   bookmark: [],
   },
   {
   id: 654356453,
   title: "Bad Boys",
   boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
   uri: "http://api.netflix.com/catalog/titles/movies/70111470",
   rating: [5.0],
   bookmark: [{ id: 432534, time: 65876586 }],
   },
   {
   id: 65432445,
   title: "The Chamber",
   boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
   uri: "http://api.netflix.com/catalog/titles/movies/70111470",
   rating: [4.0],
   bookmark: [],
   },
   {
   id: 675465,
   title: "Fracture",
   boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
   uri: "http://api.netflix.com/catalog/titles/movies/70111470",
   rating: [5.0],
   bookmark: [{ id: 432534, time: 65876586 }],
   } ];
//? 1. Create a function that will loop over the array with the forEach method. Return from the function an array of objects. Each object will contain the id and name of the specific movie.
//* possible solution 
let result =[];
function func(e){
   return result.push({id: e.id, title: e.title }); 
}
newReleases.forEach(func);
console.log(result);

//* another possible solution 
const loop=(arr)=>{
   let result2=[];
   arr.forEach(function(e){
      result2.push({id: e.id, title: e.title }); 
   });
   console.log(result2);
};
loop(newReleases);

//? 2. Create another function that will do the same thing except now use the map method.
//* possible solution 
function func2(e){
   return {id: e.id, title: e.title }
}
let result3 = newReleases.map(func2);
console.log(result3);

//* another possible solution 
const loop2=(arr)=>{
   let result4 = arr.map(func2);
   console.log(result4);
};
loop2(newReleases)
