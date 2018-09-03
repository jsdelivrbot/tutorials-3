'''
Guessing Game
'''

from random import randint

def game():
    '''
    Guessing Game YERR
    '''
    answer = randint(1, 100)


    num_guesses = 0
    distance = 100


    while True:
        guess = int(input('Guess a number:\n'))
        num_guesses += 1

        if distance == 0:
            break

        if guess < 0 or guess > 100:
            print("GUESS OUT OF BOUNDS")

        elif num_guesses == 1:
            if distance < 10:
                print("WARM")
            else:
                print("COLD")

        else:
            new_distance = abs(answer - guess)
            if new_distance < distance:
                print("WARMER")
            else:
                print("COLDER")

        distance = abs(answer - guess)

    print(f'CORRECT! IT TOOK YOU {num_guesses} GUESSES')
