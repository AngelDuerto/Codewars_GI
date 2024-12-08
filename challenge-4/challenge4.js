// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. 
// If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function loveFunc(flower1, flower2){
    if(flower1 % 2 === 0 && flower2 % 2 === 1){ //cheacking if flower1 is even and flower2 is odd
        return true;
    }
    else if(flower2 % 2 === 0 && flower1 % 2 === 1){//cheacking if flower2 is even and flower1 is odd
        return true;
    }
    else {
        return false; //return false if otherwise
    };
};

console.log(loveFunc(1, 2))

// level 8. This challenge was a little harder to understand, but after reading it a couple of times and trying different solutions, I got it. 
// I know there could be a more efficient way to do it, but this solution worked.