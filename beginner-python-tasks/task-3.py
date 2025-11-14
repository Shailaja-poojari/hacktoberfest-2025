# Task 3: Calculate factorial of a number using recursion


def factorial(n):
    """Calculates the factorial of a non-negative integer using recursion."""
    # Base case: factorial of 0 or 1 is 1
    if n == 0 or n == 1:
        return 1
    # Recursive case: n * factorial of (n-1)
    else:
        return n * factorial(n - 1)


# Main block to test the code
if __name__ == "__main__":

    # --- Test Cases ---

    # Example 1: factorial(5) ➞ 120
    num1 = 5
    result1 = factorial(num1)
    print(f"Input: {num1}")
    print(f"Output: {result1}")  # Output: 120

    print("-" * 20)

    # Example 2: factorial(3) ➞ 6
    num2 = 3
    result2 = factorial(num2)
    print(f"Input: {num2}")
    print(f"Output: {result2}")  # Output: 6

    print("-" * 20)

    # Example 3: factorial(0) ➞ 1
    num3 = 0
    result3 = factorial(num3)
    print(f"Input: {num3}")
    print(f"Output: {result3}")  # Output: 1
