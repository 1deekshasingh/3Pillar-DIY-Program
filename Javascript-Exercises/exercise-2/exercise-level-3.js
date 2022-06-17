//1

let str = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let pattern= /love/gi;
let result = str.match(pattern);
console.log(result.length);

//2

let str1 = 'You cannot end a sentence with because because because is a conjunction'
let pattern1= /because/gi;
let result1 = str1.match(pattern1);
console.log(result1.length);

//3

let quote = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let hash = /#/g;
let dollar = /\$/g;
let at = /@/g;
let percent = /%/g;
let question = /\?/g;
let and = /&/g;
let exclaim = /!/g;

let newQuote = quote.replace(hash,"").replace(dollar,"").replace(at,"").replace(percent,"").replace(question,"").replace(and,"").replace(exclaim,"");
console.log(newQuote);


//4 

let sentence = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let pattern2 = /\d+/g;

let digitWord = sentence.match(pattern2);

let a1 = digitWord[0];
let a2 = digitWord[1];
let a3 = digitWord[2];

let totalIncome = parseInt(a1) + parseInt(a2) + parseInt(a3);
console.log("The total income is :"+totalIncome);
