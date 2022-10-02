//? Write a JavaScript function that receives the following library object as an input and displays the books that can be read (the reading status is true).
//? Log the book name, author name, and reading status
const library = [
   {
   author: "Bill Gates",
   title: "The Road Ahead",
   readingStatus: true
   },
   {
   author: "Steve Jobs",
   title: "Walter Isaacson",
   readingStatus: true
   },
   {
   author: "Suzanne Collins",
   title: "Mockingjay: The Final Book of The Hunger Games",
   readingStatus: false
   }
   ];
   //!  with find method 
   const check =(array)=>{
      let result =[];
       array.find(book =>{
         if(book.readingStatus===true){
            result.push(book)
         }
      });
      console.log(result);
   };
   check(library);

//! or with filter method 
const check2 =(array)=>{
   let result = array.filter( b =>{
       return b.readingStatus===true

   });
   console.log(result);
};
check2(library);