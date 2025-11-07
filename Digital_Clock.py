import time

while True:
    # Get the current time
    current_time = time.strftime("%H:%M:%S")  # Hours:Minutes:Seconds
    
    # Print the time and refresh every second
    print("Current Time:", current_time, end="\r")
    
    time.sleep(1)
