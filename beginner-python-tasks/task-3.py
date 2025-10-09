''' Python program to calculate the factorial of anumber using recursion
here we using standard rule  = first_write_function--> then using main_block'''

def factorial(n):
    if n==0 or n==1: 
        return 1 #bcz factorial of 1 and 0 is always = 1
    else:
        return n*factorial (n-1) # recursive case
    
# this block runs only when the file is executed directly (that's why we are using main here) not when imported 
   
if __name__=="__main__":
    
 # infinite loop repeated until valid input is entered like(positvie_integer )
    while True:
        try:
            num=int(input("Enter an integer num to find its factorial ="))
            
            if num<0:# check if num is negative continue loop until valid input
                print("factorial  num cannot be negative ")
                continue 
            else:
                print(f"factorial of {num} is ={factorial(num)}")
                #exit loop after successful calculation
                break
        except ValueError:
            print("invalid input ! Please enter a valid number.")
# Using try-except to handle errors when user enters a non-integer input.

'''
Example Input/Output:

Input 1:
Enter an integer num to find its factorial = -3
   "invalid input ! Please enter a valid number."


Input 2 :
Enter an integer numto find its factorial = hello
   "invalid input ! Please enter a valid number."
   
Input 3 :
Enter an integer num to find its factorial: 5
   Factorial of 5 is = 120
'''