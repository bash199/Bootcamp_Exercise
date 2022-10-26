const btnSearch = document.querySelector('#search');
const input = document.querySelector('#user-input');
const container = document.querySelector('.container');
const h2 = document.querySelector('h2');
btnSearch.addEventListener('click',func);
input.addEventListener('keyup',()=>{if(event.key==='Enter'){func()}
})
async function getFetch(par){
   const fetched = await fetch(`https://api.github.com/users/${par}`)
   console.log(fetched);
   if(!fetched.ok){
      throw new Error ('Invlaid Name OR NOT FOUND!');
   }
   return fetched
}
async function func(){
   try{
      const val = input.value.replace("'",'')
      const result = await getFetch(val)
      const data = await result.json()
      checkIfAlreadyIn(data.avatar_url,data.name,data.public_repos,data.html_url)
      input.value= '';
}
   catch(e){
      input.value= '';
      h2.textContent='Invlaid Name OR NOT FOUND!'
      console.log(e);
   }
}
let arr =[]
function checkIfAlreadyIn(imgUrl,name,repo,GHUrl){
   if(!arr.includes(name)){
      arr.push(name)
      createCards(imgUrl,name,repo,GHUrl)
      h2.textContent='Github API'
   }
   else if(arr.includes(name)){
      h2.textContent='Already There!'
      input.value= '';
   }
}
function createCards(imgUrl,name,repo,GHUrl){
   const div = document.createElement('div');
   const img = document.createElement('img');
   const a = document.createElement('a');
   const p = document.createElement('p');
   div.style.display='flex';
   div.style.flexDirection='column';
   div.style.height='300px';
   div.style.width='200px';
   div.style.margin='10px';
   div.style.textAlign='center';
   img.style.width='200px';
   img.style.height='200px';
   p.style.height='fit-content';
   img.src=`${imgUrl}`;
   a.href=`${GHUrl}`
   a.target='_blank'
   a.textContent= name;
   p.innerHTML= `${repo} repositories` ;
   div.appendChild(img);
   div.appendChild(a);
   div.appendChild(p);
   container.appendChild(div);
};
