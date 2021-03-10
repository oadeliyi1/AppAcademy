//AFTER LECTURE WORK
function goodbye(name) {
   let statement = "Goodbye" + ' ' + name;
   return statement;
}

console.log(goodbye("Daniel")); // => "Bye Daniel."
console.log(goodbye("Mark")); // => "Bye Mark."
console.log(goodbye("Beyonce")); // => "Bye Beyonce."

//MUSCLE MEMORY
function sayHello(name) {
   let msg = "Hello, " + name + ". How are you?";
   return msg;
}

console.log(sayHello("world"));
//1
function wakeUp(name) {
   let message = "Wake up " + '' + name;
   return message;
}

console.log(wakeUp(Sarah));

//2
function getLetter(word, indexWanted) {
   let theLetter = word[indexWanted];
   return theLetter;
}

// console.log("The letter" + getIndexLetter('cake', 3) + "is at that position")

console.log(getLetter('cake', 3));

//3

function howAreYou(emotion) {
   return "I am feeling" + emotion;
}
console.log(howAreYou("happy"));

//4
function howOldAreYou(name, age) {
   let nameAge = name + "is" + age + "years old";
   return nameAge;
}

console.log(howOldAreYou("Brian", 10));

//5
function product(num1, num2, num3, num4) {
   let productEquation = num1 * num2 * num3 * num4;
   return productEquation;
}

console.log("THe product is " + product);
//6
function whatIsWeather(temp) {
   return "It is " + temp + "outside";
}

console.log(whatIsWeather("cold"));

//7

function favLang(nameOfLang) {
   return "Favorite language is" + nameOfLang;
}
console.log("French");


//Call this Function
function isCool(string) {
   let coolSentence = string + " is cool!"
   console.log(coolSentence);
   return coolSentence;
}

// Call the above function passing in the below arguments:
// Music
// JavaScript
// The world

isCool("Music");
isCool("Javascript");
isCool("The world");

//Average of Two
function averageOfTwo(num1, num2) {
   // your code here...
   let sum = num1 + num2;
   let average = sum / 2;
   return average;

}

console.log(averageOfTwo(3, 7)); // => 5.0
console.log(averageOfTwo(16, 5)); // => 10.5
console.log(averageOfTwo(2, 7.5)); // => 4.75

//Hello
function hello(str) {
   // your code here...
   console.log("Hello," + " " + str);
}

hello("cat"); // prints "Hello, cat"
hello("Helen"); // prints "Hello, Helen"
hello("Sting"); // prints "Hello, Sting"

//Divide by Three
function divideByThree(num) {
   // your code here...
   return num / 3;
}

console.log(divideByThree(9)); // => 3.0
console.log(divideByThree(15)); // => 5.0
console.log(divideByThree(98)); // => 32.666666666666664

//Whisper
function whisper(str) {
   // your code here...
   return str.toLowerCase();
}

console.log(whisper("Hey Buddy")); // => "...hey buddy..."
console.log(whisper("YEA! that was fun")); // => "...yea! that was fun..."

//Average of Four
function averageOfFour(num1, num2, num3, num4) {
   let sum1 = num1 + num2 + num3 + num4;
   let average1 = sum1 / 4;;
   return average1;
}

console.log(averageOfFour(10, 10, 15, 5)); // => 10
console.log(averageOfFour(3, 10, 11, 4)); // => 7
console.log(averageOfFour(1, 2, 3, 4)); // => 2.5

//Yell(*)
function yell(str) {
   // your code here...
   return str.toUpperCase();

}

console.log(yell("I want to go to the store")); // => "I WANT TO GO TO THE STORE!!!"
console.log(yell("Time to program")); // => "TIME TO PROGRAM!!!"

//Echo(*)
function echo(string) {
   // your code here...
   console.log(string.toUpperCase() + '...' + string + '...' + string.toLowerCase());
}

echo("Mom!"); // => prints "MOM! ... Mom! ... mom!"
echo("hey"); // => prints "HEY ... hey ... hey"
echo("JUMp"); // => prints "JUMP ... JUMp ... jump"

//Is Five
function isFive(num) {
   if (num === 5) {
      return true;
   } else {
      return false;
   }

}

console.log(isFive(5)); // => true
console.log(isFive(13)); // => false

//Is Odd
function isOdd(num) {
   // your code here!
   if (num % 2 !== 0) {
      return true;
   }
   return false;
}

function isOdd(num) {
   return (num % 2 !== 0)  //this works too because this is a comparator
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true

//Log between
function logBetween(lowNum, highNum) {
   if (highNum > lowNum) {
      for (i = lowNum; i <= highNum; i++) {
         console.log(i);
      }
   }
}

logBetween(-1, 2);
logBetween(14, 2);
logBetween(4, 6);

function printFives(max) {
   for (i = max; i >= 0; i--) {
      if (i % 5 === 0) {
         console.log(i)
      }
   }
}

printFives(20);
// END OF DAY LECTURE
//Vowel Counter
//Polya's problem solving techniques
//accepts a string as a perameter
//counts the number of vowels in the word
//returns a count of vowels in parameter
//plan
//define vowels
//define a counter
//iterate over each charater in the word
//increment my counter if the character is in vowels
//return counter
//Do
//Improve
function countVowels(word) {
   // your code here...
   //define vowels
   let vowels = 'aeiou';
   //define a counter
   let counter = 0;
   //iterate over each character in the word
   for (let i = 0; i < word.length; i++) {
      //increment counter if the character is
      let letter = word[i]
      if (vowels.includes(letter)) {
         counter++;
      }
   }
   return counter;
};

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2



// So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'

//END OF DAY LECTURE (After this is my work)
//Polya's Problem solving techniques
//UNDERSTAND
//accepts a  word (string)
//modify each word based on riles above
//return pig latinzed string
//PLAN
//Check if first letter is vowel
//add 'yay' to the end of the word and return it
//iterate over the rest of the characters in the word
//while loop
// when current char is a vowel
//first part of word (from beginning up to (exclusive of) vowel)
//send part of the word
//add an 'ay'
//DO

//IMPROVE

function pigLatinWord(word) {
   // your code here...
   //create a string of vowels
   let vowels = 'aeiou';

   //check if first letter is a vowel
   if (vowels.includes(word[0]) {
      //add 'yay' to the end of the word and return it
      return word = 'yay'
   }

   let i = 1;
   //while loop
   while (i < word.length) {
      //when current char is a vowel
      let char = word[i];
      if (vowels.includes(char)) {
         //second part of the word(vowel to the end)
         let second = word.slice(i)
         //first part of the word (from begin up to (exclusive of) vowel )
         let first = word.slice(0, i);
         //add an 'ay'
         //returning newWord
         return second + first + 'ay'
      }
      i++;
   }


};

console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"


//Log Between Stepper
//Understand
//write function logStepper
//takes three parameter(min, max, step)
//parameters are three numbers
//function prints out numbers b/t min, max and step intervals
//only needs to print using console.log
//the step num is the what we're incrementing by to get to max

//Plan
//accept min value, m
//print this value with function
//add by step num to increase
//make this new number the i
//check that it's less than max
//go through loop again
//add by stepper

function logBetweenStepper(min, max, step) {
   for (let i = min; i <= max; i += step) {
      console.log(i)
   }
}

logBetweenStepper(5, 9, 1);


//Three or Seven
//function takes num parameter
//is number divisible by 3 or 7? return true, other wise false
//divisible by 7 or 3
//modulo by 7 no remainder
//or(||) modulo by 3 no remainder

function threeOrSeven(num) {
   if ((num % 7 === 0) || (num % 3 === 0)) {
      return true;
   } else {
      return false
   }
}
function threeOrSeven(num) {
   return ((num % 7 === 0) || (num % 3 === 0))

}

console.log(threeOrSeven(3));   // => true
console.log(threeOrSeven(42));  // => true
console.log(threeOrSeven(8));   // => false

//Sum Array
//understand
//function takes in an array of numbers
//returns the total sum of all numbers in array

//plan
//we want to add all values in array
//we need to go through each value in array and add it to previous number  --> loop
//we need to iterate through each value

function sumArray(array) {
   //needs to interate through each value and add  --> loop
   let sum = 0;
   for (let i = 0; i < array.length; i++) {
      let num = array[i];
      sum += array[i];  //QUESTION: it wont let me run, im guessing because im redclaring this variable. I though let was mutable
   }
   return sum;
}
console.log(sumArray([5, 6, 4])); // => 15

//Add Arrays
//understand
//takes in two arrays --> parameter array1, array2
//returns the two arrays combined in single array
// we are putting two arrays together     --> we can use array.concat or array.push (array push add to end of array, and changes array, concat doesnt change
// existing arrays but makes a new one instead)
//QUESTION:can you have Ed go through his problem solving (1on1?)
//we'll concat those two arrays , and return the concacted array (new variable)

//plan
function combineArray(array1, array2) {
   // your code here...
   let concatArray = array1.concat(array2);
   return concatArray;
}

console.log(combineArray([1, 2], [3, 4])); // => [1, 2, 3, 4]
console.log(combineArray([17, 5], [6, 7]));  // => [17, 5, 6, 7]

//Doubler
//understand
//takes array of numbers and returns a new array
//where every element of original array is multiplied by two
//we take each element in array and multiply it by two
//we need to  iterate through every element and multiple it --> make it part of a new array?
//loop through it starting with the first element(0) and stopping at last  (i < array.length)
//take these values and add it to an array  (use push (push changes the original array) or concat)

function doubler(numbers) {
   // your code here...
   let newArray = [];

   for (let i = 0; i < numbers.length; i++) {
      let double = numbers[i] * 2;           //
      newArray = newArray.concat(double);
   }

   return newArray;
}

console.log(doubler([7, 1, 8])); // => [14, 2, 16]

//Vowel Counter
//understand
//write function
//takes in a string word
//returns the number of vowels in the word
// so we have a parameter of of a string
//the function will check for all vowels
//count all of them and return that number

//plan
// so we need to iterate through every letter, loop
// it checks if that char is a vowel
//if it is a vowel we add it to the number of vowels
//if not we iterate the next char
//we need to have a variable that counts the vowels
//but we also need a vowel variabe, it needs to iterate through all char in vowel variable
//iterates through one character, then inside that loop, create another loop that checks if the char matches vowel char

function countVowels(word) {
   let counter = 0;
   for (i = 0; i < word.length; i++) {
      let vowels = 'aeiou';
      for (j = 0; j < vowels.length; j++) {
         let letter = word[i];
         let vowel = vowels[j];
         if (letter === vowel) {
            counter++;
         }
      }

   }
   return counter;
}
console.log(countVowels("bootcamp")); // => 3

function countVowels(word) {
   let counter = 0;
   let index = 0;

   while (index < word.length)
      let letter = word
}

//Is Substring
//understand
//function takes in two string , searcString and subString
//return true if subString is apart  of searchstring (regardless of upper, lowercase
// lower case both seach string and substring to exempt whether lower or uppercase
//use .indexOf to tell if sub is in search
//if indexOf is not -1, then return true. if it's -1 sub is not in search

function isSubstring(searchString, subString) {
   let lowerSearch = searchString.toLowerCase();
   let lowerSub = subString.toLowerCase();
   let isSubinSearch = lowerSearch.indexOf(lowerSub) !== -1
   return isSubinSearch;


}

console.log(isSubstring("Time to program", "time")); // => true

//Fixx Buzz
//Understand
//takes a number (max)
//prints every number from 0 to max(not max though)
// that is divisible by 3 or 5 not both

//plan
//iterate through each number from 0 to max
// check if divisble by 3 or 5 not both  -->
//print
function fizzBuzz(max) {
   for (num = 0; num < max; num++) {
      if ((num % 5 === 0 && num % 3 !== 0)) {
         console.log(num)
      } else if ((num % 3 === 0 && num % 5 !== 0)) {
         console.log(num)
      }

   }

}

fizzBuzz(20);

//Array Index Of (*)
//understand
//takes parameters array and word
// checks if the word is in the array
//if the word is in array, return true boolean
//if not false
//plan
//remember array.indexOf iterates for you through the array
//make a varable that makes sure indexOf is not -1


function wordWithinArray(array, word) {
   let isWordInArray = array.indexOf(word) !== -1
   return isWordInArray;
}
console.log(
   wordWithinArray(["apple", "banana", "caramel", "chocolate"], "apple")
); //=> true

//Echo Recall
//understand
//takes in string
//prints it echo-ized

function echo(string) {
   // your code here...
   let echo = `${string.toUpperCase()} ... ${string}...${string.toLowerCase()}`
   console.log(echo)
}
echo("Mom!"); // => prints "MOM! ... Mom! ... mom!"

//String Included
//understand
// check if word1 or word2 is found in sentence --> return true
//

function eitherStringIncluded(sentence, word1, word2) {
   let areWordsInSentence = (sentence.includes(word1)) || (sentence.includes(word2));
   return areWordsInSentence;
}
console.log(eitherStringIncluded("how now brown cow?", "panther", "cow")); //=> true

//Pig Latin
//when word begins with vowel, add yay at end of word

//understand
//check if string[0] is a vowel
// you want word to begin with vowel, if it doesnt you remove the letter until it becomes a vowel
// iterate through all vowels to see if string[0] === that vowel or use includes method
//or .includes
//ATTEMPT
function pigLatinWord(word) {
   // your code here...
   let vowels = 'aeiou';
   let newWord = ''
   for (i = 0; i < vowels.length; i++) {
      if (word[0] === vowels[i]) {
         newWord = word.concat('yay')
      }


   }
   return newWord
};
console.log(pigLatinWord("apple")); //=> "appleyay"

//QUESTION: it looks like there was no need to use splice or string.includes, why use them? //I need to practice splice and includes
//Can ed go over his method again
//ATTEMPT
function pigLatinWord(word) {
   let vowels = 'aeiou';
   let newWord = ''
   for (i = 0; i < vowels.length; i++) {
      for (j = 0; j < word.length; j++) {
         if (word[i] === vowels[i]) {
            newWord = word.concat('yay')
         } else {
            let splicedWord =
         }
      }

   }
//video walkthrough
