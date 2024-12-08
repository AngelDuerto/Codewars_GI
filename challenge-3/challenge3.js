// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

function findAverage(array) {
    if (array.length === 0) { //if empty return 0
        return 0;
    } else {
        const sum = array.reduce(function(total, numSum){ //using reduce method to add numbers and reduce array into a number value
            return total + numSum;
        });
        return sum / array.length; //use sum of number and / byt array length to get average
    }
}

console.log(findAverage([1, 2, 3]))

console.log(findAverage([]))

// level 8. For this challenge I had to do some research on how to get the average in an array and then I found out that I could also use the reduce method on this so I decided to use that. 
// It took me a little longer than the first two to figure it out but I got the hang of it.