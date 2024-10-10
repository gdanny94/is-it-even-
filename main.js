// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven

function testEven(n) {
    return Number.isInteger(n) && n % 2 ===0
}





// Explanation:

// Number.isInteger(number) checks if the number is an integer.
// number % 2 === 0 checks if the integer is divisible by 2, indicating it’s even.
// Any float with a decimal part other than zero is considered uneven, so it returns false.