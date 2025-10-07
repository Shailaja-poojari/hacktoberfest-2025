// 🔄 Task 1: Reverse a string

function reverseStringManual(str) {
  let reversed = ""; // contains reversed string
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseStringManual("world")); // Output: "dlrow"
