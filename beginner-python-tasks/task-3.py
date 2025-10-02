#  Task 3: Count the amount of vowels in a string

def count_vowels(s):
    return sum(1 for c in s.lower() if c in "aeiou")

print(count_vowels("hello"))  # Output: 2
print(count_vowels("world"))  # Output: 1
