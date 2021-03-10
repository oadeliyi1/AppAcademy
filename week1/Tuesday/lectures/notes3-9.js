//STRING TYPE LECTURE
console.log("kale".length);
console.log("potato".length);

//index a string to get back a single character
console.log("dogs"[3]);

//opposite les get the index of a character
console.log("dogs".indexOf("g"));

//STRING TYPE DEMO
console.log('ramen'[0]);
console.log("ramen");
console.log("ramen");
console.log("ramen");
console.log("potato"[20]); // you'll get undefined

console.log("academy".indexOf("x")); // if you try to find an character that's not there youll get -1

console.log("Ori".length);

//FOLLOWING ALONG FROM MODULE 1
console.log("dogs"[0]); //
console.log("dogs"[1]); //
console.log("dogs"[2]); //
console.log("dogs"[4]); // undefined because it doesn't exist


console.log("doggos".indexOf("d")); // 0
console.log("doggos".indexOf("x")); // -1
console.log("doggos".indexOf("g")); // 2
console.log("doggos".indexOf("go")); // 3

let str1 = 'hello';
let str2 = 'world';
let str3 = str1 + str2 //
console.log(str3); // 'hello_world'


//FUNCTIONS DEMO

//Default return value
function addTwo(num1, num2) {
   num1 + num2;
}
console.log(addTwo(1, 2)); //this will return undefined becuase we are not returning anything

function addTwo(num1, num2) {
   return num1 + num2;      // this function will return something when called
}


function addTwo(num1, num2) {
   console.log(num1 + num2);      // this function will return something when called
   //return is undefined but it's still giving something when function
}
addTwo(1, 2);  //to be clear the function isn't returning anything even though it's being called, but its printing when called

//AVERAGE DEMO
function averageOfFour(num1, num2, num3, num4) {   //when writing always go through pseudocode first
   let sum = (num1 + num2 + num3 + num4)
   let average = sum / 4;
   return average;
}

console.log(averageOfFour(4, 6, 8, 1));

//LIVE FUNCTION
function aName(optionalParams) {
   // may have a return value
}

//return value of console.log is undefined. life bible c
// console.log vs return - console.log is a SIDE EFFECTS, it doesnt effect value,
//returns makes the functions VALUE equal to something

//CONDITIONALS
let c = "cat";

if (c === 'false') {
   console.log("This is true");
} else if ('cat') {
   console.log("this is false!");
} else {
   console.log("sigh");
}


if (0 > 5)
   //FALSY values - values considered false when encountered in a boolean context (ex. 0, null, undefined )
   //TRUTHY Values - considered true, anything else not a falsy values, like strings

   function printNum(num) {
      if (num > 0) {
         console.log("greater than zero");
         return "thats all folks"

      }
      if (num % 2 === 0) {
         console.log("Even");
      } else {
         console.log("odd")
      }

   }
printNum(3);

//LOOPS

let index = 0; //we haven't done any work yet. we need to go once first

//think of it like running a track, we need to run one loop before we count the first
while (index < 5) {
   console.log("hello world");
   index++;
}

let i = 0;

while (i < 6) {
   console.log(i);
   i++;
}

for (let i = 0; i < 6; i++) {  //make sure to include let key word
   console.log(i);

}

//ARRAYS
let first = [1, 2, 3];
let second = [5, 5, 5];
let third = first.concat(second)

let animals = ['elephants', 'dogs', 'more dogs'];

console.log(['elephants', 'dogs', 'more dogs'])

console.log(array[array.length - 1]) // finds last element // "turtle"

console


let animals = ['elephants', 'dogs', 'more dogs'];

//.concat method
let animals2 = ['cat']
console.log(animals.concat(animals2))

let array1 = [1, 2, 3]
let array2 = [4, 5, 6]
let array3 = [7]

let array4 = array1.concat(array2, array3)


//AFTER LECTURE WORK

//push() method
