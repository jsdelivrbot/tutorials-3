"""
hand
"""

class Hand():
    """
    Represents a blackjack Hand
    """

    vals = {'Ace':11, '2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, '10':10, 'Jack':10, 'Queen':10, 'King':10}

    def __init__(self):
        self.hand = []
        self.value = 0

    def print_hand(self, player):
        """
        Print's out the hand, altering the string based on if it's player or dealer
        """
        ans = ''
        if player:
            ans += '\nYour Hand:\n'
        else:
            ans += '\nDealer\'s Hand:\n'
        for card in self.hand:
            ans += str(card) + '\n'
        ans += f'Hand value: {self.value}\n'
        print(ans)

    def add_card(self, card):
        """
        Add's card to hand and updates value (account for Ace case)
        """
        self.hand.append(card)
        if self.value > 10 and card.face == 'Ace':
            self.value += 1
        else:
            self.value += self.vals[card.face]

    def print_dealer(self):
        """
        Special dealer printout that only shows one card
        """
        print(f'\nDealer\'s Hand:\n{self.hand[0]}\n***** of *****')
