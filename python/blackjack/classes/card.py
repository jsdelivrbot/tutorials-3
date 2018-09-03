"""
Card class for Blackjack game
"""

class Card():
    """
    Card class for Blackjack game
    """
    
    def __init__(self, suit, face):
        self.suit = suit
        self.face = face

    def __str__(self):
        return f'{self.face} of {self.suit}'
