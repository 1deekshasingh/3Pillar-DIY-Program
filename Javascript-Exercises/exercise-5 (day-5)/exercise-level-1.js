// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]
// Declare an empty array;
// Declare an array with more than 5 number of elements
// Find the length of your array
// Get the first item, the middle item and the last item of the array
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// Print the array using console.log()
// Print the number of companies in the array
// Print the first company, middle and last company
// Print out each company
// Change each company name to uppercase one by one and print them out
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// Filter out companies which have more than one 'o' without the filter method
// Sort the array using sort() method
// Reverse the array using reverse() method
// Slice out the first 3 companies from the array
// Slice out the last 3 companies from the array
// Slice out the middle IT company or companies from the array
// Remove the first IT company from the array
// Remove the middle IT company or companies from the array
// Remove the last IT company from the array
// Remove all IT companies



//1

var arr = [];

//2

var arr2 = [1, 2, 3, 4, 5, 6];

//3

var len = arr2.length;

//4

var firstName = arr2[0];
var midName = arr2[parseInt(len / 2)];
var lastName = arr2[len - 1];

console.log(firstName, midName, lastName);

//5

var mixedDataTypes = [1, 2, 3, 4, 5, 6, "Hello", true, false, null];
console.log(mixedDataTypes.length);

//6

var itcompanies = ["Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

//7

console.log(itcompanies);

//8

var length = itcompanies.length;
console.log("There are " + length + " companies in the list");

//9

var firstCompany = itcompanies[0];
var lastCompany = itcompanies[length - 1];
var middleCompany = itcompanies[parseInt(length / 2)];

console.log(firstCompany, middleCompany, lastCompany);

//10
console.log(itcompanies[0]);
console.log(itcompanies[1]);
console.log(itcompanies[2]);
console.log(itcompanies[3]);
console.log(itcompanies[4]);
console.log(itcompanies[5]);

//11

console.log(itcompanies[0].toUpperCase());
console.log(itcompanies[1].toUpperCase());
console.log(itcompanies[2].toUpperCase());
console.log(itcompanies[3].toUpperCase());
console.log(itcompanies[4].toUpperCase());
console.log(itcompanies[5].toUpperCase());

//12

console.log(itcompanies.toString() + " are big It companies");

//13

if (itcompanies.includes("IBM")) {
  console.log("It Exists");
} else {
  console.log("Company is not found");
}
if (itcompanies.includes("Zomato")) {
  console.log("It Exists");
} else {
  console.log("Company is not found");
}

//14

var newArray = [];
for (let index = 0; index < length; index++) {
  newArray.push(itcompanies[index].includes("oo"));
}
console.log(newArray);

//15

console.log(itcompanies.sort());

//16

console.log(itcompanies.reverse());

//17

console.log(itcompanies.slice(0, 3));

//18

console.log(
  "last 3 companies are  : " + itcompanies.splice(length - 3, length)
);

//19

console.log(itcompanies.slice(parseInt(itcompanies.length / 2)));

//20

console.log(itcompanies.pop());

//21

console.log(itcompanies.splice(parseInt(itcompanies.length / 2), 2));

//22

console.log(itcompanies.splice(itcompanies.length - 1, 1));

//23

console.log(itcompanies.splice(0, itcompanies.length));
