const worldPopulation = 7900;
function percentageOfWorld1(population, country){
   let percentage = (((population / worldPopulation) * 100).toFixed(1));
   return `${country} has ${population} million people, so it's about ${percentage}% of the world
   population.`;
}
let USA = percentageOfWorld1(329, 'USA');
let France = percentageOfWorld1(67.9, 'France');
let Canada = percentageOfWorld1(38.7, 'Canada');
console.log(USA,France,Canada);


const percentageOfWorld2 = (population, country) =>{
   return ` ${country} has ${population} million people, so it's about ${(((population / worldPopulation) * 100).toFixed(1))}% of the world
   population.`;
}
let Israel = percentageOfWorld2(9.1, 'Israel');
let Italy = percentageOfWorld2(60, 'Italy');
let Finland = percentageOfWorld2(38.7, 'Finland');
console.log(Israel, Italy, Finland);
