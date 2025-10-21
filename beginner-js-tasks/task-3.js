// Function to print Fibonacci series up to 'n' terms using iteration
function fibonacciIterative(n) {
    // Initialize the first two numbers of the series
    let a = 0, b = 1;

    console.log("Fibonacci Series (Iterative):");

    // Print the first two terms
    console.log(a); 
    if (n > 1) console.log(b);

    // Generate the rest of the series
    for (let i = 2; i < n; i++) {
        let nextTerm = a + b; // Calculate next term
        console.log(nextTerm); // Print the term
        a = b; // Shift values
        b = nextTerm;
    }
}

// ✅ Example Run
fibonacciIterative(7); 
// Output: 0, 1, 1, 2, 3, 5, 8

fibonacciIterative(2);
// Output: 0, 1
