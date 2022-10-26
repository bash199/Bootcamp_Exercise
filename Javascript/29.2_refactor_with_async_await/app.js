//? Refactor the simple fetch exercise (28.1) using async await.


const button = document.getElementById('btn');
const title = document.querySelector('#joke-title');
const joke = document.querySelector('#joke-text');


button.addEventListener('click',func);

async function getData(){
      const fetched = await fetch('https://api.jokes.one/jod')
   if(!fetched.ok){
      throw new Error ('error');
   }
   return fetched
}
async function func(){
   try{
      const result = await getData()
      const data = await result.json()
         const titleText = data.contents.jokes[0].joke.title;
         const jokeText = data.contents.jokes[0].joke.text;
         title.textContent = titleText;
         joke.textContent = jokeText;
         console.log(data);
   }
   catch(e){
      console.log(e);
   }
}
