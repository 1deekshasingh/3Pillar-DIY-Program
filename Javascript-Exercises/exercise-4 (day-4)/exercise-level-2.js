// 1. Write a code which can give grades to students according to theirs scores:
// 80-100, A
//70-89, B
//60-69, C
//50-59, D
//0-49, F


// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//September, October or November, the season is Autumn.
//December, January or February, the season is Winter.
//March, April or May, the season is Spring
//June, July or August, the season is Summer



// 3.  Check if a day is weekend day or a working day. Your script will take day as an input.
    //What is the day  today? Saturday
    //Saturday is a weekend.

    //What is the day today? saturDaY
    //Saturday is a weekend.

    //What is the day today? Friday
    //Friday is a working day.

    //What is the day today? FrIDAy
    //Friday is a working day.
    
    
    
    
    //1

 let score = parseInt(prompt("Enter a score"));
 if(score >=80 && score <= 100){
    console.log("Grade A");
 }
 else if(score>=70 && score<=89){
//     console.log("Grade B");
// }

// else if(score>=60 && score<=69){
//     console.log("Grade C");
// }

// else if(score>=50 && score<=59){
//     console.log("Grade D");
// }
// else{
//     console.log("Grade F");
// }

//2

// let month = prompt("Enter a month");
// let season;

// switch(month){
//     case "September":
//     case "October":
//     case "November":
//         season = "Autumn";
//         break;

//     case "December":
//     case "January":
//     case "February":
//         season = "Winter";
//         break;

//     case "March":
//     case "April":
//     case "May":
//         season = "Spring";
//         break;

//     case "June":
//     case "July":
//     case "August":
//         season = "Summer";
//         break;
// }
// console.log(season);

//3

let day = prompt("What is the day today? ").toLowerCase();
if (day == "saturday" || day == "sunday")
   console.log(day, " is a weekend!")
else console.log(day, " is a working day"
    
    
    
    
    
