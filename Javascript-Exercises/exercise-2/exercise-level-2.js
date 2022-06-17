//1

console.log(
  "'There is no exercise better for the heart than reaching down and lifting people up."
);

//2

console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);

//3

var x = "10";
console.log(typeof x);

x = parseInt(x);
console.log(typeof x);

//4

let y = parseFloat("9.8");
console.log(y, typeof y);

y = Math.ceil(y);
console.log(y, typeof y);

// 5

let python = "Python".includes("on");
let jargon = "Jargon".includes("on");

console.log(python, jargon);

// 6

let str = "I hope this course is not full of jargon";
console.log(str.includes("jargon"));

//7

let random = Math.floor(Math.random() * 100);
console.log(random);

//8

let random1 = Math.floor(Math.random() * 51) + 50;
console.log(random1);

//9

let random3 = Math.floor(Math.random() * 255);
console.log(random3);

//10

let z = "JavaScript";
let random6 = Math.floor(Math.random() * (z.length - 1));
console.log(z[random6]);

//11

console.log(
  "1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125"
);

//12

let sentence =
  "You cannot end a sentence with because because because is a conjunction";
let becauseAll = sentence.substr(
  sentence.indexOf("because", 1),
  "because".length * 3 + 2
);
console.log(becauseAll);
