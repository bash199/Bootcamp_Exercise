const countryToLiveIn = (lang,land,pop,count)=>{ 
if((pop<=50) && (lang==='English') && (land==false)){
   console.log(`You should live in ${count}.`) ;
}

else{
   console.log(`${count} does not meet your criteria.`);
}



}

console.log(countryToLiveIn('English',false,9,'Israel'));
// console.log();