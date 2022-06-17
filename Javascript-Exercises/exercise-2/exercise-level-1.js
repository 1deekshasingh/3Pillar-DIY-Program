//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

const string="30 Days Of JavaScript";

//Print the string on the browser console using console.log()

console.log(string);

//Print the length of the string on the browser console using console.log()

console.log(string.length);

//Change all the string characters to capital letters using toUpperCase() method

console.log(string.toUpperCase());

//Change all the string characters to capital letters using toUpperCase() method

console.log(string.toLowerCase());

//Cut (slice) out the first word of the string using substr() or substring() method

const str="Hello World";

console.log(str.substring(0,6));

//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.

console.log(string.substring(2));

//Check if the string contains a word Script using includes() method

console.log(string.includes("Script"));

//Split the string into an array using split() method

console.log(string.split(" "));

//Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

const val="Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";

console.log(val.split(","));

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.

string.replace("JavaScript","Python");

//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.

console.log(string.charAt(15));

//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()

console.log(string.charCodeAt(12));

//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript

console.log(string.indexOf('a'));

//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

console.log(challenge.lastIndexOf("a"));

//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let str =
  "You cannot end a sentence with because because because is a conjunction";
console.log(str.indexOf("because", 1));

//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let str1 =
  "You cannot end a sentence with because because because is a conjunction";
console.log(str1.lastIndexOf("because"));

//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let str2 =
  "You cannot end a sentence with because because because is a conjunction";
console.log(str2.search("because"));


//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.

let str3 = "  30 Days of JavaScript  ";
console.log(str3.trim());

//Use startsWith() method with the string 30 Days Of JavaScript and make the result true

let str4 = "30 Days of JavaScript";
console.log(str4.startsWith("30"));

//Use endsWith() method with the string 30 Days Of JavaScript and make the result true

let str5 = "30 Days of JavaScript";
console.log(str5.endsWith("t"));


//Use match() method to find all the a’s in 30 Days Of JavaScript

let pattern = /a/gi;
let listOf_A = challenge.match(pattern);
console.log(listOf_A);


//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'

let st6 = "30 Days of".concat(" JavaScript");
console.log(st6);


//Use repeat() method to print 30 Days Of JavaScript 2 times


console.log(challenge.repeat(2));
