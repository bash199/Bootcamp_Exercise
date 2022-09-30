const data = [
   {
   name: "John",
   birthday: "1-1-1995",
   favoriteFoods: {
   meats: ["hamburgers", "sausages"],
   fish: ["salmon", "pike"],
   },
   },
   {
   name: "Mark",
   birthday: "10-5-1980",
   favoriteFoods: {
   meats: ["hamburgers", "steak", "lamb"],
   fish: ["tuna", "salmon", "barracuda"],
   },
   },
   {
   name: "Mary",
   birthday: "1-10-1977",
   favoriteFoods: {
   meats: ["ham", "chicken"],
   fish: ["pike"],
   },
   },
   {
   name: "Thomas",
   birthday: "1-10-1990",
   favoriteFoods: {
   meats: ["bird", "rooster"],
   fish: ["salmon"],
   },
   },
   {
   name: "Mary",
   birthday: "1-10-1978",
   favoriteFoods: {
   meats: ["hamburgers", "lamb"],
   fish: ["anchovies", "tuna"],
   },
   },
   ];
//? We are not getting the data as we want it. We are going to need
//? to massage the data.
//? Create separate functions for each question below:
//? 1. Create a function that returns all the names from the array.
const funcNames=(array)=>{
   let array2=[];
   array.forEach(e => {
       array2.push(e.name);
   });
   console.log(array2);
};
// funcNames(data);

//? 2. Create a function that returns all the objects that are born before 1990.
const funcBorn=(array)=>{
   let array2=[];
   array.forEach(e => {
      if(parseInt(e.birthday.split('-')[2])<1990){
         array2.push(e);
      }
   });
   console.log(array2);
};
// funcBorn(data);

//? 3. Create a function that returns an object of all the different foods from all the objects as the key and the number of times that food is present in all the objects as the value.
const funcObj = (array) =>{
   let count = {} ;
   array.map(e => {
      let meatArray = e.favoriteFoods.meats;
      let fishArray = e.favoriteFoods.fish;
      let meatAndFishArray = meatArray.concat(fishArray);
      meatAndFishArray.map(el=>{
         if(count[el]){
            count[el]++;
         }
         else{
            count[el]=1;
         }
      });
   });
   console.log(count);
};
funcObj(data);