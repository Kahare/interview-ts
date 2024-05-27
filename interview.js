//QUESTION 1: FIZZBUZZ
//Write a program that prints 1-100. For multiples of 3 print 'Fizz', 
//for multiples of 5 print 'Buzz' and 
//for both multiples of 3 and 5 print 'FizzBuzz'
for (var x = 1; x <= 100; x++) {
    if (x % 3 === 0 && x % 5 === 0) {
        console.log("".concat(x, ": FizzBuzz"));
    }
    else if (x % 3 === 0) {
        console.log("".concat(x, ": Fizz"));
    }
    else if (x % 5 === 0) {
        console.log("".concat(x, ": Buzz"));
    }
    else {
        console.log("".concat(x));
    }
}
//QUESTION 2.
//Write a program that prints the fibonacci sequence upto 100.
function fibonacciSequence(limit) {
    var sequence = [];
    var prev = 0;
    var curr = 1;
    while (curr <= limit) {
        sequence.push(curr);
        var next = prev + curr;
        prev = curr;
        curr = next;
    }
    return sequence;
}
var fibonacci = fibonacciSequence(100);
console.log(fibonacci);
//QUESTION 3: POWER OF TWO.
//Write a program that takes an integer as input and returns true if the input is a power of two.
function isPowerOfTwo(n) {
    if (n <= 0) {
        return false;
    }
    return (n & (n - 1)) === 0;
}
var input = 51;
console.log("Is ".concat(input, " a power of two? ").concat(isPowerOfTwo(input)));
//QUESTION 4: CAPITALIZE WORDS.
//Write a program that accepts a string as input, 
//capitalizes the first letter of each word in the string and then returns the result string
function capitalizeFirstLetterOfEachWord(input) {
    var words = input.split(' ');
    var capitalizedWords = words.map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); });
    return capitalizedWords.join(' ');
}
// Example usage:
var inputString = "the quick brown fox jumped over the lazy dog";
var capitalizedString = capitalizeFirstLetterOfEachWord(inputString);
console.log(capitalizedString); // Output will be "Hello World"
//QUESTION 5: REVERSE INTEGER.
//Write a program that takes an integer as input and returns an integer with reversed digit ordering.
function reverseInteger(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}
var num = 2001;
var reversedNum = reverseInteger(num);
console.log(reversedNum);
//QUESTION 6: COUNT VOWELS.
// Write a program that counts the number of vowels in a sentence.
function countVowels(sentence) {
    var vowels = "aeiouAEIOU";
    var count = 0;
    for (var _i = 0, sentence_1 = sentence; _i < sentence_1.length; _i++) {
        var char = sentence_1[_i];
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
var sentence = "The quick brown fox jumped over the lazy dog.";
console.log("Number of vowels in the sentence: \"".concat(sentence, "\" is ").concat(countVowels(sentence)));
