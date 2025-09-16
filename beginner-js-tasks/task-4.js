// Task 4: Find the number of vowels in a String
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// Example usage
console.log(countVowels("javascript")); // → 3
console.log(countVowels("HELLO"));      // → 2
