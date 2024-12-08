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



// level 7