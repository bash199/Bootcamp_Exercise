// 1. create 2 book objects with properties: name, author, year
const book1={
   name:'Thinking, Fast and Slow',
   author:'Daniel Kahneman',
   year:2021

}
const book2={
   name:'The Will To Believe',
   author:'William James',
   year:1896

}
let bookUtils = {};

bookUtils={
   getFirstPublished(b1,b2){
      return Math.min(b1.year,b2.year);
   },
   setNewEdition(b,num){
      return b.latestEdition=num;
   },
   setLanguage(book,lang){
      return book.language=lang;
   },
   setTranslation(book,language,translation){
      return book.translation={translation,language}
      },
   
   setPublisher(book,name,location){
      return book.Publisher={name,location}
   },

   isSamePublisher(book1,book2){
      if( (book1.Publisher.name)===(book2.Publisher.name)&&(book1.Publisher.location)===(book2.Publisher.location) ){
         return true;
      }
      else{
         return false;
      }
   }
}
// console.log(bookUtils.setPublisher(book1,'gsdg','gdgds'));
// console.log(book1);
// ! bookUtils.getFirstPublished(book1,book2)
// bookUtils.setLanguage(book2,'eeeee')
// console.log(book2);
//! bookUtils.setTranslation(book1,'English','hebrew')
//! console.log(typeof book1.myArr[3]);
//! console.log(book2);
// ! bookUtils.setPublisher(book1,'bob','akko')
// ! bookUtils.setPublisher(book2,'bob','akko')
// ! console.log(bookUtils.isSamePublisher(book1,book2));


