def is_armstrong(number):
    """
    Check if a given number is an Armstrong number.
    
    Args:
        number (int): The number to check
        
    Returns:
        bool: True if the number is an Armstrong number, False otherwise
    """
    str_number = str(abs(number))  
    
    num_digits = len(str_number)
    
    armstrong_sum = 0
    for digit_char in str_number:
        digit = int(digit_char) 
        armstrong_sum += digit ** num_digits
    
    return armstrong_sum == abs(number)

