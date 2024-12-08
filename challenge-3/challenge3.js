// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

function findAverage(array) {
    if (array.length === 0) {
        return 0;
    } else {
        const sum = array.reduce(function(total, numSum){
            return total + numSum;
        });
        return sum / array.length;
    }
}

console.log(findAverage([1, 2, 3]))

console.log(findAverage([]))

// level 8