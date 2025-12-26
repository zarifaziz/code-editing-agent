/**
 * FizzBuzz Implementation
 * 
 * Prints numbers from 1 to 15 with the following rules:
 * - For multiples of 3, print "Fizz" instead of the number
 * - For multiples of 5, print "Buzz" instead of the number
 * - For multiples of both 3 and 5, print "FizzBuzz"
 * - Otherwise, print the number itself
 */

function fizzBuzz(limit = 15) {
  for (let i = 1; i <= limit; i++) {
    let output = '';
    
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    
    console.log(output || i);
  }
}

// Execute FizzBuzz when this file is run
console.log('Running FizzBuzz from 1 to 15:');
fizzBuzz();