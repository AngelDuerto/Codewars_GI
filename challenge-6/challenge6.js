// Complete the function that accepts a
// string parameter, and reverses each word in the string. 
// All spaces in the string should be retained.


function reverseWords(str) {
    let array = str.split(' '); //string into an array
    let reversedWords = array.map(function(word){ //reverse words
        return word.split('').reverse().join('');
    })
    return reversedWords.join(' '); //making array into string
};

console.log(reverseWords("Hello Angel"))



// level 7. I was a bit familiar with this challenge due to the fact that we had a similar one in a session, but the difficulty was noticeable because I didn't know what to do. After trying for about 20 minutes, I decided to look for hints on how to solve it. 
// After looking at the hints, I understood what I was missing and figured it out. I am now more comfortable with this type of challenge (reversing a string challenges).