//STRING DATA TYPE

console.log("ramen".length); // => 5
// .length allows you to get number of characters in a string

console.log("bagel".indexOf("b")); // => 0
console.log("bagel".indexOf("a")); // => 1
console.log("bagel".indexOf("l")); // => 4
console.log("bagel".indexOf("z")); // => -1   z is not present so, it returns -1
//if a character is not present -1 is returned

/*If we search for a character that appears more than once in a string,
indexOf will return the index of the first occurance of that character.*/

console.log("banana".indexOf("n"));  //it will return 2 since n appears there first

/*We can also use indexOf to search for a substring of characters.
Under this circumstance, indexOf will return the index where the substring begins in the main string */
console.log("door hinge".indexOf("oor")); // ==>1

console.log("Hello".length);

//FUNCTIONS
//Writing a function is known as a function declaration/function definition

//This function below meets the requirement of a function;
// Has a function name of average
// Takes in two parameters (number1 and number2)
// Has code to be run that handles the logic of averaging two numbers

function average(number1, number2) {
   return (number1 + number2) / 2;
}

//CONTROL FLOW - CONDITIONALS
// this is the test expression
if (3 === 3) {
   // this is the then expression
   // this code will run if the above statement is true
   console.log("this is a three!");
} else if (x === 5) {
   console.log("hello")   // this is an additional test statement
} else {
   console.log("too bad")  //if neither if or any else if is true
}
// there can only be one if and else

let x = 2;
if (x === 2) {
   console.log("hey");
} else if (1 < x) {
   console.log("yup")

}

//CONTROL FLOW - LOOPS
let index = 0;

// this is the condition that will be checked every time this loop is run
while (index < 10) {
   console.log("The number is " + index);
   // this is common shorthand for index = index + 1
   index++;
}

//Index - variable that keeps track of how many times the loop as run. they start at 0
let array = [0, 1, 2];
let index = 0;

while (index < array.length) {
   console.log(
      "Both the index and the current array position are " + array[index]
   );
   index++;
}
// we do one loop for each digit - this is called an ITERATION
//ITERATION - act of repeating a procedure. e.g you can use loops to iterate through arrays ans strings

//for loops
//for (<initial expression>;<condition>;<loopEnd expression>)

for (let index = 0; index < 10; index += 1) {
   // the code inside this block will run 10 times
}

// these two do the exact same thing!
function forLoopDoubler(array) {
   // it is convention to shorten index to just i in most cases
   for (let i = 0; i < array.length; i++) {
      array[i] = array[i] * 2;
   }
   return array;
};
//Equivalent while loop
function forLoopDoubler(array) {
   let i = 0;
   while (i < array.length) {
      array[i] = array[i] * 2;
      i++;
   }
   return array;
}

//ARRAY

/*In other words, although the length of[4, 7, 9] is 3, the index of the last value(9) is 2.
A good rule of thumb of accessing the last index of an array is to find the length and then
subtract one:*/
let testArray = [4, 7, 9];
let finalIndex = testArray.length - 1; // => (3 - 1) = 2
console.log(testArray[finalIndex]); // => 9

let wackyArray = [2, 17, "apple", "cat", ["apple"]];

console.log(wackyArray[0]); // => 2
console.log(wackyArray[1]); // => 17
console.log(wackyArray[3]); // => "cat"
console.log(wackyArray[4]); // => ["apple"]
// As you can see you can hold a string in an array. Doesn't mean you should, we will put things in an array that are similar

console.log([1, 3, 5, "apple", "jet"].indexOf(3)); // => 1
// this won't be found in the array
console.log([1, 3, 5, "apple", "jet"].indexOf("potato")); // => -1

//To concatenate an array:

console.log([1, 2, 3].concat[4, 5, 6]) // -->[1, 2, 3, 4, 5, 6]
