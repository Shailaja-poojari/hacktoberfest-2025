// Task 4: Check if a given string is a palindrome

/**
 * Checks if a string is a palindrome (reads the same forwards and backwards).
 * This function is beginner-friendly and uses built-in string/array methods.
 */
function isPalindrome(str) {
    // 1. Convert the string into an array of characters
    // Example: "madam" -> ['m', 'a', 'd', 'a', 'm']
    const charArray = str.split('');

    // 2. Reverse the array
    // Example: ['m', 'a', 'd', 'a', 'm'] -> ['m', 'a', 'd', 'a', 'm']
    const reversedArray = charArray.reverse();

    // 3. Join the array back into a string
    // Example: ['m', 'a', 'd', 'a', 'm'] -> "madam"
    const reversedString = reversedArray.join('');

    // 4. Check if the original string equals the reversed string
    return str === reversedString;
}

// --- Test Cases ---

// Example 1: "madam" ➞ true
const testString1 = "madam";
console.log(`Is "${testString1}" a palindrome? ${isPalindrome(testString1)}`); // Output: true

// Example 2: "hello" ➞ false
const testString2 = "hello";
console.log(`Is "${testString2}" a palindrome? ${isPalindrome(testString2)}`); // Output: false

// Example 3: "kayak" ➞ true
const testString3 = "kayak";
console.log(`Is "${testString3}" a palindrome? ${isPalindrome(testString3)}`); // Output: true