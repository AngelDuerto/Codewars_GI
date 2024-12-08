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


//harder level 6