// Task 2: Generate first n numbers of fibonacci series
function fibonacci(n) {
  let series = [];
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    series.push(a);
    [a, b] = [b, a + b]; 
  }
  return series;
}

// Example usage
console.log(fibonacci(10)); // → [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
