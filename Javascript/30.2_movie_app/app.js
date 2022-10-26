const containerImg = document.querySelector('.container-image');
const btnSearch = document.querySelector('#search');
const input = document.querySelector('#user-input');
const movieTitle = document.querySelector('.movie-title');
const movieGenre = document.querySelector('.movie-genre');
const movieYear = document.querySelector('.movie-year');
const moviePlot = document.querySelector('.movie-plot');
const movieDirector = document.querySelector('.movie-director');
const movieActors = document.querySelector('.movie-actors');
const h2 = document.querySelector('h2');
const movieIMDB = document.querySelector('.movie-IMDB');
const movieRT = document.querySelector('.movie-RT');
const movieMetacritic = document.querySelector('.movie-Metacritic');

btnSearch.addEventListener('click',func);

async function getFetch(par){
   const fetched = await fetch(`http://www.omdbapi.com/?apikey=22683efa&t=${par}`)
   if(!fetched.ok||par==''){
      throw new Error ('Invlaid Name OR NOT FOUND!');
   }
   return fetched
}

async function func(){
   try{
      const val = input.value.replace("'",'');
      const result = await getFetch(val);
      const data = await result.json();
      checkIfAlreadyIn(data.Poster,data.Title,data.Genre,data.Year,data.Plot,data.Director,data.Actors,val)
      // data.Actors,data.Ratings[0].Value,data.Ratings[1].Value,data.Ratings[2].Value
   }
   catch(e){
      console.log(e);
   }
}

let arr =[]
function checkIfAlreadyIn(img,title,genre,year,plot,director,actors,IMDB,RT,Metacritic,val){
   if(!arr.includes(val)){
      arr.push(val)
      createPost(img,title,genre,year,plot,director,actors)
      h2.textContent='Movie app'
   }
   else {
      h2.textContent='Already Searched!'
      input.value= '';
   }
}
function createPost(img,title,genre,year,plot,director,actors){
   containerImg.innerHTML = '';
   containerImg.style.backgroundImage = `url(${img})`
   movieTitle.textContent = `${title}`;
   movieGenre.textContent = `${genre}`;
   movieYear.textContent = `${year}`;
   moviePlot.textContent = `${plot}`;
   movieDirector.textContent = `${director}`;
   movieActors.textContent = `${actors}`;
   // movieIMDB.textContent =`IMDB ${IMDB}`;   
   // movieRT.textContent =`RT ${RT}`;
   // movieMetacritic.textContent =`Metacritic ${Metacritic}`;
}







