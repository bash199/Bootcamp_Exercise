const myCountry={

   array: ['Iceland','Reykjavík','Icelandic',1,[0]],

   describe(){
      return `${this.array[0]} has ${this.array[3]} million people, their mother tongue is ${this.array[2]}, they have ${this.array[4]} neighboring countries and a capital called ${this.array[1]}.`
   },
   checkIsland(){
      return (this.array[4][0]===0)?(this.array[5]=true): false;
   }
}
console.log(myCountry.describe());
console.log(myCountry.checkIsland());
console.log(myCountry);