// Declare a function fullName and it print out your full name.

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

// Declare a function addNumbers and it takes two two parameters and it returns sum.

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0






//1

function fullName(){
    let firstName = "Ayush";
    let lastName = "Gupta";
    console.log(firstName + " " + lastName);
}

fullName();

//2

function fullName(firstName, lastName){
    console.log(firstName + " " + lastName);
}

fullName("Ayush", "Gupta");

//3

function add(num1, num2){
    console.log(num1 + num2);
}

add(10, 20);

//4

function areaOfRectangle(length, width){
    console.log(length * width);
}

areaOfRectangle(5,10);

//5


function perimeterOfRectangle(length, width){
    console.log(2*length * width);
}

perimeterOfRectangle(5,10);

//6

function volumeOfRectangle(length, width, height){
    console.log(length * width * height);
}

volumeOfRectangle(5,10,20);

//7

function areaOfCircle(radius){
    console.log(Math.PI * radius * radius);
}

areaOfCircle(7);

//8

function perimeterOfCircle(radius){
    console.log(2 * Math.PI * radius);
}

perimeterOfCircle(7);

//9

function density(mass, volume){
    console.log(mass / volume);
}

density(10, 20);

//10

function speed(distance, time){
    console.log(distance / time);
}

speed(20,15);

//11

function weight(mass){
    console.log(Math.PI ** 2 * mass);
}

weight(10);

//12

function celciusToFahernheit(c){
    console.log(c*(9/5) + 32);
}

celciusToFahernheit(37);

//13

function calculateBMI(weight, height){
    return (weight / (height * height));
}

let BMi = calculateBMI(60, 1.7);
if(BMi < 18.5){
    console.log("Underweight");
}
else if(BMi >= 18.5 && BMi < 24.9){
    console.log("Normal weight");
}

else if(BMi >= 25 && BMi < 29.9){
    console.log("Overweight");
}

else{
    console.log("Obese");
}

//14


function checkSeason(month) {
    let season;
    
    switch (month.toLowerCase()) {
       case "september":
       case "october":
       case "november":
          season = "Autumn";
          break;
    
       case "december":
       case "january":
       case "february":
          season = "Winter";
          break;
    
       case "march":
       case "april":
       case "may":
          season = "Spring";
    
       case "june":
       case "july":
       case "august":
          season = "Summer";
          break;
    }
    return season;
 } console.log(checkSeason("May"));

 //15


 function findMax(a, b, c) {
    let max = 0;
    for(const elem of arguments) {
       if (elem > max) max = elem;
    } return max;
 } console.log(findMax(2, 2, 4));
