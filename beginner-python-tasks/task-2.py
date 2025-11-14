#  Task 2: Check if a string is a palindrome


def is_palindrome(s):  # Function to check if a string is a palindrome
    s = s.lower().replace(" ", "")  # Normalize the string: lowercase and remove spaces
    return s == s[::-1]  # Check if the string is equal to its reverse


print(is_palindrome("madam"))  # Output: True
print(is_palindrome("hello"))  # Output: False
