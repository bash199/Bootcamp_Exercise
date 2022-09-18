// a function that calculates the circle area by a given radius.

function circleArea(radius){
return ((Math.PI) * (Math.pow(radius,2)));
}
// a variable that stores the functions returned data.
let area = circleArea(5);
// Prints the area. 
console.log(area);
// print it rounded to two decimal places.

console.log(area.toFixed(2));