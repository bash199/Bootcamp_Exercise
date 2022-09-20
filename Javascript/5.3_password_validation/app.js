const  passwordStrengthIfElse =(password)=>{
   if (password.length>7){
      return 'Strong';
   }
   else{
      return 'Weak';
   }
}
const passwordStrengthTernary =(password2)=>{
   password2.length>7 ? console.log('Strong'): console.log('Weak')
}

const  advancedPasswordStrengthIfElse =(password3)=>{
   const regex = /[A-Z]/g;
   (password3.length<7) ? console.log('Weak') : (password3.match(regex) && password3.length>7) ? console.log('Very Strong') : console.log('Strong');

   // (password3.match(regex) && password3.length>7)? console.log('Very Strong') : (password3.length>7) ? console.log('Strong') : console.log('Weak');
}           
console.log(advancedPasswordStrengthIfElse(''));


