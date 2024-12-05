console.log("========================================= A. Q + A ==================================================");

// How do we assign a value to a variable?
let car = "BMW";
const number = 34;

// How do we change the value of a variable?
let language = "English";
language = "Spanish";
console.log(language);

// How do we assign an existing variable to a new variable?
let man = "smart";
let woman = man;
console.log(woman);

/*
Remind me, what are declare, assign, and define?
DECLARE, when we create a variable with let, const keywords, this is declaring a variable.
ASSIGN, when we give a value to our variable, this is assigning a value.
DEFINE, when we create a function or object, this is defining an object/function. Also when we declare a variable and assign a variable to it also called defining.

What is pseudocoding and why should you do it?
It is like drawing outline or drafting of something without going in to details. Makes easy plan better before start coding, we can find our mistakes right before writing codes, also it is understandalbe for other who don't have IT knowledge when we share the ideas.

What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? 
I would say 20% thinking is more than enough, jump to computer and try it, you will see the actual problem and ways to fix it when you actualy code. We can't learn driving or swimming by reading articles about it, unless try it in real. 
However, if you are straggling with some logic and setting on computer won't help, get out for a break!
*/

console.log("========================================= B. Strings ==================================================");

// For all other questions that involve writing code, you can solve them via the following instructions.

// Create a variable called firstVariable
// let firstVariable

// Assign it the value of the string "Hello World"
let firstVariable = "Hello World";

// Change the value of this variable to some number
firstVariable = 45;

// Store the value of firstVariablein a new variable called secondVariable
let secondVariable = firstVariable;

// Change the value of secondVariable to any string.
secondVariable = "Bye World";

// What is the value of firstVariable?
console.log(firstVariable); // 45

// Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean

let yourName = "Jamshid Rustaqi";
let newString = "Hello, my name is " + yourName;
console.log(newString);

console.log("========================================= C. Booleans ==================================================");

// Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

console.log(a < b);
console.log(c > d);
console.log("Name" === "Name");
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false === false);
console.log(e === "Kevin");
console.log(a < b && b < c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == "48");

console.log("========================================= D. The farm ==================================================");
/*
  Declare a variable animal. Set it to be either "cow" or something else
  Write code that will print out "mooooo" if the it is equal to cow
  Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
  Commit
  */

let animal = "CoW";
if (animal.toLowerCase() === "cow") {
  console.log("mooooo");
} else {
  console.log("Hey! You're not a cow.");
}

console.log("========================================= E. Driver's Ed ==================================================");

/*  
Make a variable that holds a person's age; be semantic
Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
*/

let age = 15;
if (age >= 16) {
  console.log("Here are the keys!");
} else {
  console.log("Sorry, you're too young.");
}

console.log("========================================= A. The basics ==================================================");

// Write a loop that will print out all the numbers from 0 to 10, inclusive
for(let i = 0; i<=10; i++){
    console.log(i);
}

console.log("----------------------------------");

// Write a loop that will print out all the numbers from 10 up to and including 400
for(let i = 10; i<=400; i++){
    console.log(i);
}

console.log("----------------------------------");

// Write a loop that will print out every third number starting with 12 and going no higher than 4000
for(let i = 12; i<=4000; i=i+3){
    console.log(i);
}

console.log("========================================= B. Get even ==================================================");

// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

let num = 100;
let message = " is an even number";

for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(i + message);
    } else {
      console.log(i);
    }
}

console.log("========================================= C. Give me Five ==================================================");

/*
For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
Example Output:
I found a 5. High five!
I found a 10. High five!

Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
Example Output:
I found a 3. Three is a crowd
I found a 5. High five!
I found a 6. Three is a crowd
I found a 9. Three is a crowd
I found a 10. High five!

For numbers divisible by both three and five, be sure your code prints both messages
*/

for (let i = 0; i <= 100; i++) {
    
  if (i === 0 ) {
      continue;
    }
    
    else if (i % 3 === 0 && i % 5 === 0) {
      console.log(`I found a ${i}. Three is a crowd. High five!`);
    }
    
    else if (i % 3 === 0) {
      console.log(`I found a ${i}. Three is a crowd`);
    }
    
    else if (i % 5 === 0) {
      console.log(`I found a ${i}. High five!`);
    }
}

console.log("========================================= D. Savings account ==================================================");

/*
Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
Check your work! Your bank_account should have $55 in it.
*/

let sum = 0;
for (let i = 1; i <= 10; i++) {
 let bank_accdount = sum += i;
}
console.log("$" + sum); // $55

console.log("----------------------------------");

/*
You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
Check your work! Your bank_account should have $10,100 in it.
*/

let sumOfAll = 0;
for (let i = 1; i <= 100; i++) {
 let my_bank_accdount = sumOfAll += i * 2;
}
console.log("$" + sumOfAll.toLocaleString()); // $10,100

console.log("========================================= A. Talk about it: ==================================================");

/*
What are the things in an array called?
Whatever we have inside an array called item / element or value, and they can be different data types like String, Number, Boolean...

Do Arrays guarantee those things will be in order?
Yes, and we can see them as insertion order, unless if we use some methods and modify the order.

What real-life thing could you model with an array?
shopping on black friday infront of apple store, a huge line who come first will be served first, if someone wants to leave the line other people will shift and take that space. 
*/

console.log("========================================= B. Easy Does It ==================================================");

//Create an array that contains three quotes and store it in a variable called quotes
const quotes = [
  "Do your assignments. -Jordon",
  "Watch youtube short videos about MERN stack. -Jordon",
  "You can do it! have confidence! - Jordon"
];
console.log(quotes);

console.log("======================================= C. Accessing elements =================================================");

// Given the following array const randomThings = [1, 10, "Hello", true]
const randomThings = [1, 10, "Hello", true];
console.log(randomThings);

// How do you access the 1st element in the array?
console.log(randomThings[0]);

// Change the value of "Hello"to "World"
console.log(randomThings[2] = "World");
console.log(randomThings);

/* 
Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
YES, IT UPDATED. IT IS A CONST ARRY, BUT WE STILL CAN MODIFY THE VALUES IN A CONST ARRAY, HOWEVER WE CAN NOT REASSIGNING OF REFERENCES IN A CANST ARRAY, Example;
[1, 10, "Hello", true]  original array with no changes
[1, 10, "Dog", true]  changed the value "Hello" to "Dog" is fine in a canst Array
[1, 10, 4, 69]  changing of value type is prevented in a canst Array, we can't do this, will error out
*/
console.log("======================================= D. Change values =================================================");

// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
console.log(ourClass);

// What would you write to access the 3rd element of the array?
console.log(ourClass[2]);

// Change the value of "Github" to "Octocat"
console.log(ourClass[4]="Octocat");
console.log(ourClass);

// Add a new element, "Cloud City" to the array
console.log(ourClass.push("Cloud City"));
console.log(ourClass);

console.log("======================================= E. Mix It Up =================================================");

// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: const myArray = [5, 10, 500, 20]
const myArray = [5, 10, 500, 20];
console.log(myArray);

// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon", "Car");
console.log(myArray);

// Remove the 5from the beginning of the array.
myArray.shift(5);
console.log(myArray);

// Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley");
console.log(myArray);

// Remove the string of your choice from the end of the array.
myArray.pop("Car");
console.log(myArray);

// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
myArray.reverse();
console.log(myArray);

//SINCE WE MODIFIED THE ARRAY MEANS WE MUTATED THE ARRY. MUTATING AN ARRAY MEANS MODIFYING THE ORIGINAL ARRAY DIRECTLY, AND NO NEED TO CREATE ANOTHER ARRAY FOR THAT CHANGE, IT TARGETS THE ORIGINAL ARRAY. Mutating array methods are (push, pop, shift, unshift, splice, sort and reverse).

console.log("======================================= F. Biggie Smalls =================================================");

// Create a variable that contains an integer.
// Write an if ... elsestatement that:
// console.log() "little number" if the number is entered is less than 100
// console.log() "big number" if the number is greater than or equal to 100.

let x = 88;
if(x < 100){
  console.log("little number");
}else if (x >=100){
  console.log("big number");
} else{
  console.log("that is not a number");
}

console.log("==================================== G. Monkey in the Middle =================================================");

// Write an if ... else if ... else statement:
// console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".
let y = 14;
if(y < 5){
  console.log("little number");
}else if (y > 10){
  console.log("big number");
} else{
  console.log("monkey");
}

console.log("==================================== H. What's in Your Closet? ==============================================");

//Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// 1- What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

// 2- Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset.splice(6, 0 , "raybans");
console.log(kristynsCloset);

// 3- Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);

console.log("-------------- Thom's closet started ---------------");

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

// 4- Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
console.log(thomsCloset[0][0]);

// 5- In the same way, access one item from Thom's pants array.
console.log(thomsCloset[1][1]);

// 6- Access one item from Thom's accessories array.
console.log(thomsCloset[2][1]);
// 7- Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log("Thom is looking fierce in a grey button-up, jeans and wool scarf!");
// 8- Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset);

console.log("==================================== A. printGreeting ======================================================");


// Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting?

// Like so?

// console.log(printGreeting("Slimer"));
// => Hello there, Slimer!

// You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.

function printGreetingwith(name){
  return `Hello there, ${name}!`;
}
console.log(printGreetingwith("Slimer"));

console.log("============================================= B. printCool ===================================================");

// Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.

// console.log(printCool("Captain Reynolds"));
// => "Captain Reynolds is cool";

function printCool(name){
  return `${name} is cool`;
}
console.log(printCool("Captain Reynolds"));

console.log("=========================================== C. calculateCube ================================================");

// Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.
// console.log(calculateCube(5));
// => 125

function calculateCube (number){
  return number * number * number; 
}
console.log(calculateCube (5));

console.log("============================================== D. isVowel ====================================================");

// Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

// console.log(isVowel("a"));
// => true

let checkVowel = ["a", "e", "i", "o", "u"];

function isVowel(char){

  let newChar = char.toLowerCase();
  if(checkVowel.includes(newChar) ){
    return true;
  }else{
    return false;
  }
}
console.log(isVowel("a"));

console.log("============================================ E. getTwoLengths ================================================");

// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

// console.log(getTwoLengths("Hank", "Hippopopalous"));
// => [4, 13]


function getTwoLengths(String1, String2){
    return [String1.length, String2.length];
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

console.log("=========================================== F. getMultipleLengths ============================================");

// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// => [5, 4, 2, 2, 4]

let lengths = [];
function getMultipleLengths(stringArray){
  for(let i = 0; i<stringArray.length; i++){
    lengths[i] = stringArray[i].length;
  }
  return lengths;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

console.log("=========================================== G. maxOfThree ============================================");

// Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

// console.log(maxOfThree(6, 9, 1));
// => 9

// Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().

function maxOfThree (num1, num2, num3){
  if(num1 > num2 && num1 > num3){
    return num1;
  } else if (num2 > num1 && num2 > num3){
    return num2;
  }else{
    return num3
  }
}
console.log(maxOfThree(6, 9, 1));

console.log("=========================================== H. printLongestWord ============================================");

// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter"

let longestWord = "";
function printLongestWord(strArr){

  for(let i = 0; i<strArr.length; i++){
    if(strArr[i].length > longestWord.length){
      longestWord = strArr[i];
    }
  }
  return longestWord;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Toddybrother"]));

console.log("=========================================== A. Make a user object ============================================");

// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.
let user={
  name: "John",
  age: 28,
  email: "something@something.com",
  purchased: []
}
console.log(user);

console.log("=========================================== B. Update the user ==============================================");

// Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
user.email = "john@something.com";
// Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++
user.age++;
console.log(user);

console.log("======================================== C. Adding keys and values ===========================================");

// You have decided to add your user's location to the data that you want to collect.
// Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).
user.location= "other";
console.log(user);

console.log("=========================================== D. Shopaholic! ===================================================");

// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.
user.purchased.push("carbohydrates");

// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
user.purchased.push("peace of mind");

// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
user.purchased.push("Merino jodhpurs");
console.log(user);

// Console.log just the "Merino jodhpurs" from the purchasedarray.
console.log(user.purchased[2]);

console.log("========================================== E. Object-within-object ============================================");

// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.
// If we want to give our user a friendwith a nameand age, we could write:
// When we console.log user, we would see the friendobject added to our user object.
// user.friend = {
//     name: "Grace Hopper",
//     age: 85
// }

// Write a friend object into your userobject and give the friend a name, age, location, and purchased array (empty for now)
user.friend = {
  name: "Chris",
  age: 31,
  location: "Chicago",
  purchased: []
}

// Console.log just the friend's name
console.log(user.friend.name);

// Console.log just the friend's location
console.log(user.friend.location);

// CHANGE the friend's age to 55
user.friend.age = 55;

// The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
user.friend.purchased.push("The One Ring");

// The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
user.friend.purchased.push("A latte");
console.log(user.friend);

// Console.log just "A latte" from the friend's purchasedarray.
console.log(user.friend.purchased[1]);

console.log("============================================ F. Loops =======================================================");

// Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
for(const key in user.purchased){
  console.log(user.purchased[key]);
}

console.log("---------------------------------------");

// Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
for(const key in user.friend.purchased){
  console.log(user.friend.purchased[key]);
}

console.log("==================================== G. Functions can operate on objects =====================================");

// Write a single function updateUser that takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a return statement, it will merely modify the user object.

function updateUser() {
  user.age += 1; 
  user.name = user.name.toUpperCase();
  console.log(user);
}
updateUser();

console.log("============================================ 1. Mama cat =====================================================");

// Define an object called cat1that contains the following properties:
// name
// breed
// age (a number)
// console.log the cat's age
// console.log the cat's breed

let cat1 ={
  name: "Joe",
  breed: "Mog",
  age: 19
}
console.log(cat1.age);
console.log(cat1.breed);

console.log("============================================ 2. Papa cat =====================================================");

// Define an object called cat2that also contains the properties:
// name
// breed
// age (a number)

let cat2 ={
  name: "Jim",
  breed: "Siamese",
  age: 45
}

console.log("=========================================== 3. Combine Cats! =================================================");

/*
The cats are multiplying!
Write a function combineCatsthat has two parameters mama, and papa. The function will take two arguments -- each a cat object.
Pass cat1and cat2as arguments to the combineCatsfunction. The function should console.log them.
Example:
combineCats(cat1, cat2)
{ name: "Joe", age: 19, breed: "Mog" }
{ name: "Jam", age: 45, breed: "Siamese" }
*/

function combineCats(mama, papa){
  let combineCat = {
    name: mama.name + papa.name,
    age: mama.age + papa.age,
    breed: mama.breed + papa.breed
  }
  return combineCat;
}
 cat1 = { name: "Joe", age: 19, breed: "Mog" };
 cat2 = { name: "Jam", age: 45, breed: "Siamese" };
 
console.log(combineCats(cat1, cat2));
// This is to demonstrate that functions can take objects as arguments

// You could also invoke the combineCatsfunction by writing the objects straight into the parentheses:

// combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" });

// Make it so the combineCatsfunction will return a combination of the two incoming cats

// The result should be an object wherein the

// name is a concatenation of the parents' names
// the age is 1
// the breed is each of the parents' breeds with a hyphen in between
// Example:

// console.log(combineCats(cat1, cat2));
// Result:



// This is to demonstrate that a function can return an object