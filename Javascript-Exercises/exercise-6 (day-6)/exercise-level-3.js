// Copy countries array(Avoid mutation)
// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
// Sort the webTechs array and mernStack array
// Extract all the countries contain the word 'land' from the countries array and print it as array
// Find the country containing the hightest number of characters in the countries array
// Extract all the countries contain the word 'land' from the countries array and print it as array
// Extract all the countries containing only four characters from the countries array and print it as array
// Extract all the countries containing two or more words from the countries array and print it as array
// Reverse the countries array and capitalize each country and stored it as an array



import {countries} from "./countries.js";
import {webTechs} from "./webTechs.js";


//1

let countriesCopy = [];
for(const country of countries) {
   countriesCopy.push(country);
}
console.log(countriesCopy);

//2

let sortedCountries = countriesCopy.sort();;
console.log(sortedCountries);

//3 

let sortedWebTechs = webTechs.sort();
let mernStack = ['MangoDB', 'Express', 'Redux', 'NodeJS'];
let sortedMernStack = mernStack.sort();

console.log(sortedWebTechs, sortedMernStack);


//4

let landCountries = [];
for(const country of countries) {
   if(country.includes('land')) {
      landCountries.push(country);
   }
} console.log(landCountries);


//5

let maxLength = 0;
let maxLenCountry;
for (const country of countries) {
   if(country.length > maxLength) {
      maxLength = country.length;
      maxLenCountry = country;
   }
}

console.log(maxLenCountry);


//6

let lenFourCountries = [];
for (const country of countries) {
   if(country.length === 4) 
      lenFourCountries.push(country);
} console.log(lenFourCountries);


//7

let twoWordCountries = [];
for(const country of countries) {
   if(country.split(' ').length > 1) 
      twoWordCountries.push(country);
} console.log(twoWordCountries);


//8

let reverseCountries = countries.sort();

let capReversedCountries = [];

for (const country of reverseCountries) {
   capReversedCountries.push(country.toUpperCase());
}

console.log(capReversedCountries);
