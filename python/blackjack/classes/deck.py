'''
Deck to represent dealer's deck in Blackjack
'''
from random import shuffle

from classes.card import Card

class Deck():
    """
    Deck Implementation
    """

    suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs']
    faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']

    def __init__(self):
        self.reset_deck()

    def __str__(self):
        ans = ''
        for card in self.cards:
            ans += f'{card.face} of {card.suit}\n'
        return ans

    def shuffle(self):
        shuffle(self.cards)

    def draw_card(self):
        if len(self.cards) == 0:
            print('Deck empty - Getting a new one!')
            self.reset_deck()
        return self.cards.pop()

    def reset_deck(self):
        self.cards = []

        for suit in self.suits:
            for face in self.faces:
                new_card = Card(suit, face)
                self.cards.append(new_card)

        self.shuffle()
