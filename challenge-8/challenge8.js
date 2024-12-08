// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
// Return a sorted array.
    const oddSort = array.filter(function(num) { //Filter odd numbers and sort them
        return num % 2;
    }).sort(function(a, b){
        return a - b;
    });
    return array.map(function(num){ //Replace odd numbers in the original srray with sorted ones
        return num % 2 ? oddSort.shift() : num;
    });
}

console.log(sortArray([7, 1]))
console.log(sortArray([5, 8, 6, 3, 4]))
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))


// level 6. After trying a few level 7 challenges and getting more comfortable with them (I was still struggling), Codewars gave me a level 6 challenge to try. I would say that this challenge was hard, it took me a long time to get a working answer, but I decided to challenge myself and keep working until I got a solution. 
// I knew how to sort things and how to filter them, but I didn’t know how to put them all in the same array with the even and odd numbers together. It took me a long time to figure that out. After researching and going on Stack Overflow, I finally figured it out. 
// Working on this GI, taught me that I am comfortable with using JavaScript, but I still need to commit to doing more challenges and keep studying to get more experience with methods and more familiar with advanced challenges.