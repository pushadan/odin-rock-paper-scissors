# odin-rock-paper-scissors
Odin JS project: Rock-Paper-Scissors


Problem Solving

1. Understand the Problem (ELI5)

2. Plan

Does your program have a user interface? What will it look like? What functionality will the interface have? Sketch this out on paper.

    - No, will create a GUI in a later project. Everything will be done in console.

What inputs will your program have? Will the user enter data or will you get input from somewhere else?

    - User input on rock, paper, scissors choice (done from alert box). Named playerSelection
    - Computer input on same choice. Named computerSelection

What’s the desired output?

    - Display playerSelection and computerSelection.
    - Display the winner of the contest:
      - "You Lose! Paper beats Rock!"
      - "You Win! Rock beats Scissors!"
    - Best 3 out of 5 games. First to 3 wins

- Given your inputs, what are the steps necessary to return the desired output?

3. Psuedocode
    0. REPEAT steps 1-4 ✓
      1. GET playerSelection (user input) ✓
        - should be case insensitive ✓
      2. SET cpuInput (computer input) ✓
        - random choice ✓
      3. COMPARE inputs 
        - determine the winner based on results
      4. PRINT the result/winner 
    5. UNTIL user or cpu have 3 wins ✓
    6. PRINT the ultimate winner ✓


4. Divide and Conquer (pick the easiest)