let numSiblings = Number(prompt('How many siblings do you have?'));

if(numSiblings === 1){
   console.log('1 sibling!');
}

else if(numSiblings > 1){
   console.log('More than 1 sibling');
}

else{
   console.log('No siblings');
}

// Reflect on why we should use the === operator and type
// conversion in this situation.
//  we should use the === operator and the type conversion because the prompt method return a string value, and in this case we want a number from the user so we will use the === operator and the type conversion to insure that the user inputs a number.