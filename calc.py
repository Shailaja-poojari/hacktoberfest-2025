def calc(a, b, op):
    return {
        "+": a+b, "-": a-b,
        "*": a*b, "/": a/b if b!=0 else "∞"
    }.get(op, "Invalid")

a = float(input("First number: "))
op = input("Operator (+-*/): ")
b = float(input("Second number: "))
print("Result:", calc(a, b, op))
