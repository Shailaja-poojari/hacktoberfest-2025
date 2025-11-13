// task-4
// Function to check if a string is a palindrome
// A palindrome reads the same forwards and backwards
function isPalindrome(str) {
  // Step 1: Input validation - handle edge cases
  if (str === null || str === undefined) {
    return false; // Invalid input 
  }
  
  // Convert to string if not already (handles numbers)
  str = String(str);
  
  // Empty strings are technically palindromes
  if (str.length === 0) {
    return true;
  }

  // Step 2: Clean the string - remove all non-alphanumeric characters like: (spaces, punctuation, special characters) and then it converts the input string to lowercase.
  // Regular expression explanation:
  // The square brackets define a character set.
  // The ^ inside the square brackets means negation, so it matches any character that is not in the rage from "a" to "z" or 0 to 9. For example, spaces, punctuation, and special characters will be matched.
  // The "g" flag means global, so it will match all space,punctuation, and special characters ocurrences in the string and not just the first one.
  // The "i" flag means case insensitive, so it will match all letters, it doesn't matter if they are uppercase or lowercase.
  // Finally, the quotation marks that represents an empty string "" means that all matched characters will be replaced with nothing, effectively removing them from the string.

  // Then after the replace method, the toLowerCase() method is called to convert the entire cleaned string to lowercase.

  // This ensures that phrases like "A man, a plan, a canal: Panama!" are correctly identified as palindromes by ignoring spaces and punctuation and giving us "amanaplanacanalpanama" for the comparison.
  const cleaned = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  
  // Handle case where all characters were removed (e.g., ",!!") which results in an empty cleaned string
  if (cleaned.length === 0) {
    return true;
  }

  // Step 3: Reverse the cleaned string
  const reversed = cleaned.split("").reverse().join("");

  // Step 4: Compare and return result
  // If cleaned string matches reversed string, it's a palindrome and return true, otherwise return false
  return cleaned === reversed;
}

// Example usage with simple test cases:
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("madam"));   // true
console.log(isPalindrome("hello"));   // false

// Example usage with comprehensive test cases:

// Sentences with Spaces
console.log(isPalindromeImproved("A man a plan a canal Panama")); // true
console.log(isPalindromeImproved("race a car"));    // false

// Sentences with Punctuation
console.log(isPalindromeImproved("A man, a plan, a canal: Panama")); // true
console.log(isPalindromeImproved("Was it a car or a cat I saw?")); // true

// Edge Cases
console.log(isPalindromeImproved(""));              // true (empty string)
console.log(isPalindromeImproved("a"));             // true (single character)
console.log(isPalindromeImproved("121"));           // true (numeric palindrome)
console.log(isPalindromeImproved(null));            // false (null input)
console.log(isPalindromeImproved("!!!"));           // true (only special chars)
