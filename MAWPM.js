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
