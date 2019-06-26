import sys

class Operation:
    def __init__(self, operation, numbers):
        self.operation = operation
        self.numbers = numbers

def introduction():
    print("=== PYTHON CALCULATOR ===\n\n")

def print_instructions():
    instructions = "Type your command in this format : "
    instructions += "add 1,2\n"
    instructions += "Possible operations: add, subtract, multiply and divide\n"
    print(instructions)

def get_user_input():
    user_input = input("Enter your command: ")
    return user_input

def parse_input(user_input):
    # split string into operator and numbers
    user_input_parsed = user_input.split(" ")

    # Make list of numbers
    user_input_numbers = user_input_parsed[1].split(",")
    user_input_numbers_int = []
    for number in user_input_numbers:
        user_input_numbers_int.append(int(number))
        
    # Create instance of operation class & return it
    operation = Operation(user_input_parsed[0],user_input_numbers_int)
    return operation

def run_operation(task):
    if task.operation == "add":
        # set the variable for the final answer
        answer = task.numbers[0];
        numbers = task.numbers[1:]
        # loop through number list
        for number in numbers:
            answer += number;
        return answer
    if task.operation == "substraction":
        answer = task.numbers[0];
        numbers = task.numbers[1:]
        for number in numbers:
            if number != task.numbers[0]:
                answer -=number
        return answer
    
    if task.operation == "multiply":
        answer = task.numbers[0];
        numbers = task.numbers[1:]
        for number in numbers[0]:
            answer *=number
        return answer

    if task.operation == "divide":
        answer = task.numbers[0];
        numbers = task.numbers[1:]
        for number in numbers[0]:
            answer /=number
        return answer

def answer_user(solution):
    answer = "\nYour answer is : "
    answer += str(solution)
    answer += "\n"
    print(answer)
    
def ask_again():
    again = input("Would like to enter another command (yes/no) : ").lower()
    if again == "yes":
        return True
    if again == "no":
        sys.exit()

def main():
    
    while True:
        introduction()
        print_instructions()
        user_input = get_user_input()
        operation = parse_input(user_input)
        answer = run_operation(operation)
        answer_user(answer)
        again = ask_again()

main()
