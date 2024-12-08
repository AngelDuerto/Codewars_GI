// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. 
// If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.


function sum (numbers) {
    if(numbers.length === 0){ //if empty return 0
        return 0;
    } else {
        return numbers.reduce((total, numSum) => total + numSum); //using reduce method to add numbers and reduce array into a number value
    }
}

console.log(sum([1, 5.2, 4, 0, -1]))
console.log(sum([]))
console.log(sum([-2.398]))

// level 8. I felt pretty confident with this challenge, it was a simple challenge. 
// Again I decided to use an array method to get more familiar with them.