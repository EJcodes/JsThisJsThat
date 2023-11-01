/* An easy way to append data to the end of an array is via the push() method.

The push() method takes one or more arguments and appends them to the end of 
the array, in the order in which they appear. It returns the new length of the array.

Examples:

arr1 now has the value [1, 2, 3, 4, 5] and arr2 has the value ["Stimpson", "J", "cat", ["happy", "joy"]].
Push ["dog", 3] onto the end of the myArray variable.

Push ["dog", 3] onto the end of the myArray variable.
*/ 

const arr1 = [1, 2, 3];
arr1.push(4, 5);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);

/* Another way to change the data in an array is with the .pop() function.

.pop() is used to pop a value off of the end of an array. We can store this 
popped off value by assigning it to a variable. In other words, .pop() removes 
the last element from an array and returns that element.

Any type of entry can be popped off of an array - numbers, strings, even nested arrays.

The first console.log will display the value 6, and the second will display the value
 [1, 4].

 Use the .pop() function to remove the last item from myArray and assign the popped off 
value to a new variable, removedFromMyArray.
*/

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
let removedFromMyArray = myArray.pop(); 

/*
pop() always removes the last element of an array. What if you want to remove the first?

That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.

Example:
*/
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();

/*
removedFromOurArray would have a value of the string Stimpson, and ourArray would have ["J", ["cat"]].
Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.
*/ 

// Setup
const myArray2 = [["John", 23], ["dog", 3]];

// Only change code below this line

let removedFromMyArray2 = myArray2.shift();


/*
Passing Values to Functions with Arguments
Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "passed") into a function when it is called are known as arguments.

Here is a function with two parameters, param1 and param2:

function testFun(param1, param2) {
  console.log(param1, param2);
}
Then we can call testFun like this: testFun("Hello", "World");. We have passed two string arguments, Hello and World. Inside the function, param1 will equal the string Hello and param2 will equal the string World. Note that you could call testFun again with different arguments and the parameters would take on the value of the new arguments.

Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
Call the function with two numbers as arguments.
*/

const functionWithArgs = (a,b) =>{
    console.log(a + b);
}


/*
We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.

Example

function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);
answer has the value 8.

plusThree takes an argument for num and returns a value equal to num + 3.

Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.
*/


const timesFive = (num) => num * 5;

 /*
 In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.

Variables which are declared without the let or const keywords are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with let or const.

Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.

Inside function fun1, assign 5 to oopsGlobal without using the var, let or const keywords.
*/

// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal here`
  oopsGlobal = 5;

}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}


/*
Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.

Here is a function myTest with a local variable called loc.

function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc);
The myTest() function call will display the string foo in the console. The console.log(loc) line (outside of the myTest function) will throw an error, as loc is not defined outside of the function.

The editor has two console.logs to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable myVar inside myLocalScope and run the tests.

Note: The console will still display ReferenceError: myVar is not defined, but this will not cause the tests to fail.
*/
function myLocalScope() {
    // Only change code below this line
  
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);


 /* 
  Global vs. Local Scope in Functions
It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

In this example:

const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}
The function myFun will return the string Head because the local version of the variable is present.

Add a local variable to myOutfit function to override the value of outerWear with the string sweater.
*/ 

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
    let outerWear = "Sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();
/*
Understanding Undefined Value returned from a Function
A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.

Example

let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);
addSum is a function without a return statement. The function will change the global sum variable but the returned value of the function is undefined.

Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.
*/

/*
Understanding Undefined Value returned from a Function
A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.

Example

let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);
addSum is a function without a return statement. The function will change the global sum variable but the returned value of the function is undefined.

Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.

*/ 

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line

function addFive() {
    sum += 5;
}
// Only change code above this line

addThree();
addFive();

/*
Assignment with a Returned Value
If you'll recall from our discussion about Storing Values with the Assignment Operator, everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.

Assume we have defined a function sum which adds two numbers together.

ourSum = sum(5, 12);
Calling the sum function with the arguments of 5 and 12 produces a return value of 17. This return value is assigned to the ourSum variable.

Call the processArg function with an argument of 7 and assign its return value to the variable processed.
*/ 
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = prcoessArg(7);


/*
In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed.

*/

  //ToDo Look for different solution because 2 retrurns isn't best practice.
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  let boo = arr.shift();
  return boo
  return item;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

/*
Another data type is the Boolean. Booleans may only be one of two values: true or false. They are basically little on-off switches, where true is on and false is off. These two states are mutually exclusive.

Note: Boolean values are never written with quotes. The strings "true" and "false" are not Boolean and have no special meaning in JavaScript.

Modify the welcomeToBooleans function so that it returns true instead of false.
*/

function welcomeToBooleans() {
  // Only change code below this line
  
  return true; // Change this line

  // Only change code above this line
}

/*

if statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false.

When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.

Pseudocode

if (condition is true) {
  statement is executed
}
Example 
function test(myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);
*/

function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if(wasThatTrue === true) {
    return("Yes, that was true");
  } else if(wasThatTrue === false){
    return("No, that was false");
  }
  // Only change code above this line

}


/*
There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.

The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent or false if they are not. Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left.

function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}
If myVal is equal to 10, the equality operator returns true, so the code in the curly braces will execute, and the function will return Equal. Otherwise, the function will return Not Equal. In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. This is known as Type Coercion. Once it does, however, it can compare terms as follows:

1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true
Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12.
*/

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

/*
Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.

Examples

3 ===  3  // true
3 === '3' // false
In the second example, 3 is a Number type and '3' is a String type.

Use the strict equality operator in the if statement so the function will return the string Equal when val is strictly equal to 7.
*/

// Setup

function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

/*
In the last two challenges, we learned about the equality operator (==) and the strict equality operator (===). Let's do a quick review and practice using these operators some more.

If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values. However, the strict equality operator will compare both the data type and value as-is, without converting one type to the other.

Examples

3 == '3' returns true because JavaScript performs type conversion from string to number. 3 === '3' returns false because the types are different and type conversion is not performed.

Note: In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:

typeof 3
typeof '3'
typeof 3 returns the string number, and typeof '3' returns the string string.

The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns the string Equal only when the values are strictly equal.

*/

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");