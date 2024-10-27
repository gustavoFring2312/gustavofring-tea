// Helper function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Helper function to find factorial of a number
function factorial(num) {
    if (num < 0) return "Factorial is not defined for negative numbers";
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

// Helper function to capitalize the first letter of each word
function capitalizeWords(sentence) {
    return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Helper function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < Math.sqrt(num) + 1; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Helper function to generate a random number between min and max
function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage
console.log("Reversed String:", reverseString("Hello"));             // "olleH"
console.log("Factorial of 5:", factorial(5));                        // 120
console.log("Capitalized Words:", capitalizeWords("hello world"));   // "Hello World"
console.log("Is 7 Prime?", isPrime(7));                              // true
console.log("Random Number between 1 and 10:", randomInRange(1, 10)); // e.g., 3
