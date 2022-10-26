//? Let's do a simple ajax call with fetch using this URL “https://api.jokes.one/jod”.
//? Create a button that will fetch the joke of the day.
//? Display to the screen the joke title and the joke itself.

const button = document.getElementById('btn');
const title = document.querySelector('#joke-title');
const joke = document.querySelector('#joke-text');


button.addEventListener('click',getData);

function getData(){
   fetch('https://api.jokes.one/jod')
   .then(result=>result.json())
   .then(res=>{
      const titleText = res.contents.jokes[0].joke.title;
      const jokeText = res.contents.jokes[0].joke.text;
      title.textContent = titleText;
      joke.textContent = jokeText;
   })
   .catch(res=>console.log(res,'Failed to load', 404))
}

