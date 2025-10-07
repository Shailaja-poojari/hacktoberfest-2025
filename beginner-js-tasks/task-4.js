// Function to check if a string is a palindrome
function isPalindrome(str) {
  // Step 1: Convert the string to lowercase to make it case-insensitive
  str = str.toLowerCase();

  // Step 2: Reverse the string
  const reversed = str.split('').reverse().join('');

  // Step 3: Compare the original string with the reversed one
  return str === reversed;
}

// ✅ Example 1
console.log(isPalindrome("madam")); // Output: true

// ✅ Example 2
console.log(isPalindrome("hello")); // Output: false
