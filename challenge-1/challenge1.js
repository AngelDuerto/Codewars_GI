// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []


function invert(array) {
    return array.map(function(num){ //.map to get iterate and create a new version of thr array
      return num * -1; // * -1 to change only the sign the number has
    });
};

console.log(invert([1, 2, 3, 4, 5]))
console.log(invert([1, -2, 3, -4, 5]))
console.log(invert([]))


// level 8. I felt good about this challenge, it was one of the first ones I tried. 
// I decided to use a method (.map) to challenge myself and get more comfortable with array methods.