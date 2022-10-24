//? 1. What is wrong with the code? explain in your own words
//* the thing is that when whoIsStronger invokes the hero.getStrength it will no longer be bound to hero and this will result in undefined because it refers to the window.
//? 2. Fix the code so that invoking the whoIsStronger function will print "I am stronger".
//* to fix the code we need to bound the hero.getStrength back to hero , we will use bind method in order to this.
//? note: you cannot change the 'hero' or the whoIsStronger function.

const hero = {
   health: 5,
   power: 68,
   getStrength: function(){
      if (this.health <= 5){
         return this.power - 10;
      }
      else{
         console.log(this);
         return this.power;
      }
   }
}

function whoIsStronger(getStrength){
   const myStrength = 82;
   if (getStrength() < myStrength){
      return "I am stronger";
   } 
   else {
      return "You are stronger";
   }
}

whoIsStronger(hero.getStrength.bind(hero));

