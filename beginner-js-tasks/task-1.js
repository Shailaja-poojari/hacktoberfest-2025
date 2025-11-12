// Task 1: Reverse a string

function reverseString(s) {
  return s.split("").reverse().join("");  // Split the string into an array, reverse the array, and join it back into a string
}

console.log(reverseString("hello")); // Output: "olleh"
