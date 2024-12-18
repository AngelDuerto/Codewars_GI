// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). 
// Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. 
// For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, 
// but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

var str = "How can mirrors be real if our eyes aren't real";

String.prototype.toJadenCase = function () {
    const words = this.split(' ') //Split string into words
    const capWords = words.map(function(words) {
      return words.charAt(0).toUpperCase() + words.slice(1); //Capitalize the first letter of a word
    }) 
    const result = capWords.join(' '); //Join the array into a string
    return result; // Return result
};

console.log(str.toJadenCase())

// level 7. Now, in this challenge I noticed that the difficulty had really increased, too much text I would say. 
// Also, I was not familiar with String.prototype and I didn't know that I had to use the 'this' keyword to access the object. I had to do some research on MDN because this challenge confused me. I would say that it took me longer than I would have liked.