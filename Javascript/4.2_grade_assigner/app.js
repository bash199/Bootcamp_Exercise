
function gradeAssigner(arg){
   if(arg>=0 &&arg<=64){
      return "F"
   }
   else if(arg>=65 && arg<=69){
      return "D"
   }
   else if(arg>=70 &&arg<=79){
      return "C"
   }
   else if(arg>=80 &&arg<=89){
      return "B"
   }
   else if(arg>=90 &&arg<=100){
      return "A"
   }
   else {
      return "Invalid"
   }
}
console.log( gradeAssigner(90));