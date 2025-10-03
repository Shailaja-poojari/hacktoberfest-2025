
# Task 3: Fibonacci Sequence 🔢

def fibonacci(n: int):
    a, b = 0, 1
    sequence = []
    for _ in range(n):
        sequence.append(a)
        a, b = b, a + b
    return sequence

if __name__ == "__main__":
    num = int(input("Enter the number of terms: "))
    print("Fibonacci sequence:", fibonacci(num))
