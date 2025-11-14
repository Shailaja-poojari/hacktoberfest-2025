# Task 4: Check if a number is an Armstrong number


def is_armstrong(num):
    """Checks if a number is an Armstrong number."""
    # Convert the number to a string to find its length (number of digits)
    s = str(num)
    n = len(s)

    # Initialize sum
    sum_of_powers = 0

    # Go through each digit in the number
    temp = num
    while temp > 0:
        digit = temp % 10
        sum_of_powers += digit**n
        temp //= 10

    # Check if the sum of powers equals the original number
    return sum_of_powers == num


# --- Test the function with multiple inputs ---

# Example 1: 153 (is an Armstrong number)
# 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
print(f"Is 153 an Armstrong number? {is_armstrong(153)}")  # Output: True

# Example 2: 123 (is not an Armstrong number)
# 1^3 + 2^3 + 3^3 = 1 + 8 + 27 = 36
print(f"Is 123 an Armstrong number? {is_armstrong(123)}")  # Output: False

# Example 3: 9474 (is an Armstrong number)
# 9^4 + 4^4 + 7^4 + 4^4 = 6561 + 256 + 2401 + 256 = 9474
print(f"Is 9474 an Armstrong number? {is_armstrong(9474)}")  # Output: True

# Example 4: 100 (is not an Armstrong number)
# 1^3 + 0^3 + 0^3 = 1
print(f"Is 100 an Armstrong number? {is_armstrong(100)}")  # Output: False
