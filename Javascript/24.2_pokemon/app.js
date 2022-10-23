//? You are given a function, Pokeman, that takes three parameters, pokemonName, pokemonType, an array of different pokemon attack methods, pokemonAttackList.
//? 1. Create three instances of the Pokemon and save them in a variable.
//? 2. Using prototype properties, add the following methods:
//? ● A method called callPokemon will print the following:
//? “I choose you, <pokemon name>
//? ● • A method called attack that takes one parameter,
//? an attack number, that will print the specific attack
//? method from the pokemonAttackList array as the following: “<pokemon name> used <attack method>” Call each pokemon with the 2 methods you created.
//? Here is the Pokemon function:

function Pokemon(pokemonName, pokemonType,pokemonAttackList){
   this.name = pokemonName;
   this.type = pokemonType;
   this.attackList = pokemonAttackList;
}
const po={
   pName : 'pikokaka',
   pType : 'bitch',
   Plist : ['slicing','fatring','guggling']
}

Pokemon.prototype.callPokemon = function(){
   console.log(`I choose you, ${this.name}.`);
};
Pokemon.prototype.attack = function(num){
   console.log(`${this.name} used ${this.attackList[num]}.`);
}
Pokemon.prototype.callTypeOfPokemon = function(){
   console.log(`${this.name} type is ${this.type}.`);
}

let pokey = new Pokemon(po.pName,po.pType,po.Plist);

pokey.callPokemon()
pokey.attack(1)
pokey.callTypeOfPokemon()