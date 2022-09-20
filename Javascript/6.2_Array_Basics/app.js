const people = ['Greg', 'Mary', 'Devon', 'James'];
// Using a loop, iterate through this array and console.log all of the people.
for(let i=0; i<people.length; i++){
   console.log(people[i]);
}

// 2. Write the command to remove "Greg" from the array.
console.log(people.shift());


//  Write the command to remove "James" from the array.
console.log(people.pop());


// Write the command to add "Matt" to the start of the array
console.log(people.unshift("Matt"));


// Write the command to add your name to the end of the array.
console.log(people.push("Bashir"));


//Using a loop, iterate through this array, and after
// console.log "Mary", exit from the loop.
let i=0
while( people[i]!='Devon'){
   console.log(people[i]);
   i++
}
// Write the command to make a copy of the array using a
// slice. The copy should NOT include "Mary" or "Matt"
console.log(people.slice(2));

// Write the command that gives the indexOf where "Mary" is located.
console.log(people.indexOf('Mary'));

// Write the command that gives the indexOf where "Foo" is
// located (this should return -1)located (this should return -1)
console.log(people.indexOf('Foo'));



// Redefine the people variable with the value you started
// with. Using the splice command, remove "Devon" from
// the array and add "Elizabeth"
console.log(people.splice(2, 1, 'Elizabeth', 'Artie'));


// Create a new variable called withBob and set it equal
// to the people array concatenated with the string of "Bob".
let withBob = people.concat("Bob")
