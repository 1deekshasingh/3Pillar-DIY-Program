// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.
// Write a program which tells the number of days in a month, now consider leap year.




let month = prompt("Enter the month").toLowerCase();
let daysCount = 0;

let d = new Date();
let year = d.getFullYear();

if(month == "february"){
    if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
        daysCount = 29;
    }
    else{
        daysCount = 28;
    }
}

switch(month){
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        daysCount = 31;
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        daysCount = 30;
        break;
}

console.log(`${month} has ${daysCount} days`);
