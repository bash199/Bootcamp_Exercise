
// function countryInfo(country, population , capitalCity) {
//    return country + " has " + 
//    population + " million people and its capital city is " + capitalCity+"." ;
// }
// implicit 
const countryInfo = (country, population , capitalCity) => (`${country} has ${population} million people and its capital city is ${capitalCity}. `);


let var1 = countryInfo("Spain", 47 , " Madrid");
let var2 = countryInfo("USA",320 , "Washington");
let var3 = countryInfo("France", 67 , "Paris");

console.log(var1);
console.log(var2);
console.log(var3);