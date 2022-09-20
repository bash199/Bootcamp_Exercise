let populations =[9,320,38,60];
let country = ['Israel','USA','Canada','France']
function percentageOfWorld1(population, country){
   let percentage = (((population / 7900) * 100).toFixed(1));
   return `${country} has ${population} million people, so it's about ${percentage}% of the world population.`;
}
const  populationPercentages =(array) =>{
   let percentages=[];
   for(let i=0; i<array.length; i++){
      percentages.push((percentageOfWorld1(populations[i],country[i])));
   }
   return percentages;
} 
console.log(populationPercentages(populations));