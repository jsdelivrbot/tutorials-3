def print_board(board):
    print('_______')
    print(f'|{board[0]}|{board[1]}|{board[2]}|')
    print(f'|{board[3]}|{board[4]}|{board[5]}|')
    print(f'|{board[6]}|{board[7]}|{board[8]}|')
    print('-------')

def check_winner(board):
    #Checks rows
    for i in range(0,9,3):
        if board[i] == ' ' or board[i+1] == ' ' or board[i+2] == ' ':
            continue
        if board[i] == board[i+1] == board[i+2]:
            return board[i]
    #Checks cols
    for i in range(3):
        if board[i] == ' ' or board[i+3] == ' ' or board[i+6] == ' ':
            continue
        if board[i] == board[i+3] == board[i+6]:
            return board[i]
    #Checks diagonals
    if board[0] != ' ' and board[4] != ' ' and board[8] != ' ':
        if board[0] == board[4] == board[8]:
            return board[4]
    if board[2] != ' ' and board[4] != ' ' and board[8] != ' ':
        if board[2] == board[4] == board[6]:
            return board[4]
    return None

def valid_move(move, board):
    if move[0] in ['A','B','C'] and move[1] in ['1','2','3']:
        pos = convert_move(move)
        return board[pos] == ' '
    return None

def convert_move(move):
    num = int(move[1]) - 1
    if move[0] == 'A':
        return num
    elif move[0] == 'B':
        return num + 3
    elif move[0] == 'C':
        return num + 6
    else:
        return None

def end_game(winner) :
    print(f'Game Over! {winner} wins')

def game():
    moves = 0
    board = [' ' for x in range (9)]
    turn = 'X'
    winner = None
    while moves < 9:
        #Gets turn input
        input_move = input(f'{turn}\'s turn. Input a move (Rows are A,B, and C, Columns are 1,2, and 3)\n')

        #Ensures input is valid and converts to board index
        while not valid_move(input_move, board):
            input_move = input('Invalid move, try again\n')
        move = convert_move(input_move)

        #Places move and switches turn
        board[move] = turn
        if turn == 'X':
            turn = 'O'
        else:
            turn = 'X'
        moves += 1
        print_board(board)

        winner = check_winner(board)
        if winner:
            end_game(winner)
            break

    if not winner:
        print('Tie Game! No possible moves left')
game()
