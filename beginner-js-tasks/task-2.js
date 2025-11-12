// Task 2: Check if a number is prime

function isPrime(num) {
  if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
  if (num === 2) return true; // 2 is the only even prime number
  if (num % 2 === 0) return false; // Exclude other even numbers
  
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(7));  // Output: true
console.log(isPrime(10)); // Output: false
