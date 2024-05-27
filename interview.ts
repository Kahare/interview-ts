//QUESTION 1: FIZZBUZZ
//Write a program that prints 1-100. For multiples of 3 print 'Fizz', 
//for multiples of 5 print 'Buzz' and 
//for both multiples of 3 and 5 print 'FizzBuzz'

for (let x = 1; x <= 100; x++) {
    if (x % 3 === 0 && x % 5 === 0) {
        console.log(`${x}: FizzBuzz`);
    } else if (x % 3 === 0) {
        console.log(`${x}: Fizz`);
    } else if (x % 5 === 0) {
        console.log(`${x}: Buzz`);
    } else {
        console.log(`${x}`);
    }
}

//QUESTION 2.
//Write a program that prints the fibonacci sequence upto 100.

function fibonacciSequence(limit: number): number[] {
    const sequence: number[] = [];
    let prev = 0;
    let curr = 1;
    
    while (curr <= limit) {
        sequence.push(curr);
        const next = prev + curr;
        prev = curr;
        curr = next;
    }
    
    return sequence;
}

const fibonacci = fibonacciSequence(100);
console.log(fibonacci);

//QUESTION 3: POWER OF TWO.
//Write a program that takes an integer as input and returns true if the input is a power of two.

function isPowerOfTwo(n: number): boolean {
    if (n <= 0) {
        return false;
    }
    return (n & (n - 1)) === 0;
}

let input: number = 51; 
console.log(`Is ${input} a power of two? ${isPowerOfTwo(input)}`);

//QUESTION 4: CAPITALIZE WORDS.
//Write a program that accepts a string as input, 
//capitalizes the first letter of each word in the string and then returns the result string

function capitalizeFirstLetterOfEachWord(input: string): string {
    const words = input.split(' ');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(' ');
}

// Example usage:
const inputString = "the quick brown fox jumped over the lazy dog";
const capitalizedString = capitalizeFirstLetterOfEachWord(inputString);
console.log(capitalizedString); // Output will be "Hello World"

//QUESTION 5: REVERSE INTEGER.
//Write a program that takes an integer as input and returns an integer with reversed digit ordering.
function reverseInteger(num: number): number{
    return parseInt(num.toString().split('').reverse().join(''))
}
const num = 2001
const reversedNum = reverseInteger(num)
console.log(reversedNum)


//QUESTION 6: COUNT VOWELS.
// Write a program that counts the number of vowels in a sentence.

function countVowels(sentence: string): number {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of sentence) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}
let sentence: string = "The quick brown fox jumped over the lazy dog.";
console.log(`Number of vowels in the sentence: "${sentence}" is ${countVowels(sentence)}`);
