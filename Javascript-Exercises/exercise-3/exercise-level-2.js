// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// Enter base: 20
// Enter height: 10
// The area of the triangle is 100
// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12
// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// Calculate the slope, x-intercept and y-intercept of y = 2x -2

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

// Compare the slope of above two questions.

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
// If the length of your name is greater than 7 say, your name is long else say your name is short.

// Compare your first name length and your family name length and you should get this output.

// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh
// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.
// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.
// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// Enter number of years you live: 100
// You lived 3153600000 seconds.
// Create a human readable time format using the Date time object

// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm


/1

 var base = prompt("Enter the base of the triangle");
 var height = prompt("Enter the height of the triangle");
 var area = base*height*0.5;
 console.log("The area of the triangle is " + area);

//2

 var side1 = prompt("Enter the length of side 1");
 var side2 = prompt("Enter the length of side 2");
 var side3 = prompt("Enter the length of side 3");

 var perimeter = parseInt(side1) + parseInt(side2) + parseInt(side3);
 console.log("The perimeter of the triangle is " + perimeter);

//3

 var length = parseInt(prompt("Enter the length of the rectangle"));
 var width = parseInt(prompt("Enter the width of the rectangle"));

 var area = length*width;
 var perimeter = parseInt(2*(length+width));

 console.log("The area of rectangle is :"+area);
 console.log("The perimeter of rectangle is :"+perimeter);

//4

 var r = parseInt(prompt("Enter the radius of the circle"));
 const pi = 3.14;
 var area = pi*r*r;
 var circumference = parseInt(2*pi*r);

 console.log("The area of circle is :"+area);
 console.log("The circumfernece of circle is :"+circumference);

//5

var x = parseInt(prompt("Enter the  value of x"));
 var y = parseInt(prompt("Enter the value of y"));

 var slope1 = 2*x -2 -y
 console.log(slope1);

//6

 let x1 = parseInt(10);
 let x2 = parseInt(6);
 let y1 = parseInt(2);
 let y2 = parseInt(2);

 var slope2 = (y1-y2)/(x1-x2);
 console.log(slope2);

// 7

 slope2 > slope1 ? console.log("Slope is greater") : console.log("Slope is less");

//8

 var x = parseInt(prompt("Enter the value of x"));

 var y = parseInt(x**2 +6*x +9);

 console.log(y);

 if(y==0) console.log("y =0 at x = "+x);

//9

 var hours = parseInt(prompt("Enter the hours"));
 var rateperhour = parseInt(prompt("Enter the rate per hour"));

 var earning = hours*rateperhour;

 console.log("The earning of the employee is :"+earning);

//10

 var str = "Deeksha Singh";
 str.length > 7 ? console.log("Your name is long") : console.log("Your name is short");

//11

 var firstName = "Deeksha"
 var lastName = "Singh"

 firstName.length > lastName.length ? console.log("Your first name, Ayush is longer than your family name, Gupta") : console.log("Your first name, Ayush is shorter than your family name, Gupta");

//12

let myAge = parseInt(prompt("Enter my age"));
 let yourAge = parseInt(prompt("Enter your age"));

 console.log("I am "+(myAge-yourAge)+" years older than you");

//13

 var birthYear = parseInt(prompt("Enter your birth year"));
 var currentYear = new Date().getFullYear();

 currentYear - birthYear > 18 ? console.log("You are "+(currentYear-birthYear)+" years old . You are old enough to drive") : console.log("You are"+(currentYear-birthYear)+" years old . You will be allowed after"+(18-(currentYear-birthYear))+" years");

//14

 var yearslived = parseInt(prompt("Enter the number of years you have lived"));
 console.log("You have lived for "+yearslived*365*24*60*60+" seconds");


//15

let d = new Date();
 let min = d.getMinutes();
 let hour = d.getHours();
 let year = d.getFullYear();
 let month = d.getMonth();
 let date = d.getDate();

 console.log(`${year}-${month+1}-${date} ${hour}:${min}`);
 console.log(`${date}-${month+1}-${year} ${hour}:${min}`);
console.log(`${date}/${month+1}/${year} ${hour}:${min}`);
