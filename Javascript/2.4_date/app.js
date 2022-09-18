// the date of the current day.
const dateOfToday = new Date();

// the current year.
const year = dateOfToday.getFullYear();

// the current month.
const options = { month: 'long'};
const month1 = (new Intl.DateTimeFormat('en-US', options).format(dateOfToday));

// the current day.
const options1 = { weekday: 'long'};
let dayOfWeek  = ((new Intl.DateTimeFormat('en-US', options1).format(dateOfToday)));


// the current day in the month (number).
const dayInMonth = dateOfToday.getDate();


// function 
function tellTheDate(YEAR, MONTH, DAYOFWEEK, DAY ){
   return "Today is " + DAYOFWEEK + " the " + DAY + " of " + MONTH + " " + YEAR +"."
}

//calling the function and storing its data into a var.
let tellMeTheDate = tellTheDate(year,  month1, dayOfWeek, dayInMonth);
// log the format.
console.log(tellMeTheDate);