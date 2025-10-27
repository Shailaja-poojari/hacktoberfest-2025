// Create a task-3.js file inside the beginner-js-tasks/ folder.
// Write a simple JavaScript function that takes a string input and returns it reversed.

// Example:
// reverseString("hello") ➞ "olleh"
// ✅ Add comments to explain your logic.
// ✅ Add a short sample input/output at the end as test.



function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("hello")); // "olleh"
