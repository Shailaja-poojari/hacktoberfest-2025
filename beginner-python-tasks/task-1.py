#  Task 1: Calculate factorial of a number

def factorial(n):           # Function to calculate factorial
    if n == 0 or n == 1:    # Base case: factorial of 0 or 1 is 1
        return 1
    
    return n * factorial(n - 1)     # Recursive case

print(factorial(5))  # Output: 120
