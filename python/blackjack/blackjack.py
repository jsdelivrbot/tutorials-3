"""
Blackjack Implementation
"""

from classes.deck import Deck
from classes.hand import Hand

PLAYER = True
DEALER = False

def deal(deck, hand):
    """
    Deals a card from the deck to the hand
    """
    hand.add_card(deck.draw_card())

def game():
    """
    Gameplay
    """
    #Initial setup
    deck = Deck()
    chips = 1000
    print('Welcome to Blackjack!!\n')

    #Outer loop keeps going until player can't or doesn't want to play anymore
    while chips > 0:
        #Takes initial bet
        bet = input(f'You have {chips} chips. Enter your bet for this hand: ')
        while not bet.isdigit():
            bet = input('Please enter a valid number')
        bet = int(bet)
        while bet > chips:
            bet = int(input('You cannoy bet more than you currently have. Enter another bet: '))

        #Sets up initial hand
        dealer_hand = Hand()
        player_hand = Hand()
        deal(deck, dealer_hand)
        deal(deck, dealer_hand)
        deal(deck, player_hand)
        deal(deck, player_hand)

        # Initial printouts
        dealer_hand.print_dealer()
        player_hand.print_hand(PLAYER)

        #Hit or stand
        while player_hand.value <= 21:
            hitstand = input('Would you like to hit (h) or stand(s)? ').lower()
            while not (hitstand == 'h' or hitstand == 's'):
                hitstand = input('Invalid input, please enter h for hit or s for stand: ').lower()
            #stand --> stop dealing cards
            if hitstand == 's':
                break
            else:
                deal(deck, player_hand)
                player_hand.print_hand(PLAYER)

        #Player busted
        if player_hand.value > 21:
            print('You busted! Dealer wins!')
            chips -= bet
        else:
            #Dealer hand plays out
            while dealer_hand.value <= 17:
                deal(deck, dealer_hand)
            #Print final hands
            dealer_hand.print_hand(DEALER)
            player_hand.print_hand(PLAYER)
            #Decide Winner
            if dealer_hand.value > 21:
                print('Dealer busted! Player wins!')
                chips += bet
            elif dealer_hand.value < player_hand.value:
                print('Player\'s hand is higher! Player wins!')
                chips += bet
            elif dealer_hand.value == player_hand.value:
                print('Tie! Chips returned')
            else:
                print('Dealer\'s hand is higher! Dealer wins!')
                chips -= bet

        #Play again?
        if chips > 0:
            play_again = input('Would you like to keep playing? Enter q to quit, anything else to continue: ').lower()
            if play_again == 'q':
                break

    print(f'Thanks for Playing! Total Winnings: ${chips - 1000}')
game()
