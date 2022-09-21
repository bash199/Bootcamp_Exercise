const book={
   name:'The C Programing Language',
   author:'Brian W. Kernighan',
   pages:272,
   published:1995,
   language:'English',
}
const bookFunc= (obj) => {
   console.log( `The book ${obj.name} was written by ${obj.author} in the year ${obj.published} and written in ${obj.language}`)
}

bookFunc(book)
