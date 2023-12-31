// Constants

// Initial player's score
const INITIAL_SCORE = 0;
// Score needed to win
const WINNING_SCORE = 5;
// Initial count of lives set to 5
const INITIAL_LIVES = 5; 
// max losses 
const MAX_LOSSES = 5; 
// ID of the game board element
const GAME_BOARD_ID = "game-board";
// ID of the start button element
const START_BUTTON_ID = "start-button";
// ID of the score display element
const SCORE_DISPLAY_ID = "score";
// ID of the lives display element
const LIVES_DISPLAY_ID = "lives";


// State Variables

// Player's score
let score;
// Count of lives
let lives; 


// Cached Elements

// Start button element
const startButton = document.getElementById(START_BUTTON_ID);
// Game board element
const gameBoard = document.getElementById(GAME_BOARD_ID);
// Score display element
const scoreDisplay = document.getElementById(SCORE_DISPLAY_ID);
// Lives display element
const livesDisplay = document.getElementById(LIVES_DISPLAY_ID);



// Event Listeners


// Event listener for the start button
startButton.addEventListener("click", initializeGame);



// Functions


// Initialize the game state, returns everything to a default state 
function initializeGame(){
    // Reset the score to the initial value
    score = INITIAL_SCORE;
    // Reset lives to the initial value
    lives = INITIAL_LIVES;
    // Disable the start button to prevent multiple game starts
    startButton.disabled = true; 
    // Hide the start button
    startButton.style.display = "none"
    // Clear the game board
    gameBoard.innerHTML = ""
    // Render the game state onto the DOM
    render();
}

// Render the game state
function render(){
    console.log("I'm in the render function")
    // Set the score display to the current score
    scoreDisplay.innerText = `Score: ${score}`; 
    // Set the lives display to the current lives
    livesDisplay.innerText = `Lives: ${lives}`; 
    // Create and replace two new game tile pairs
    createTilePair();
}


// Function to create and replace two game tiles (one positive and one negative) on the game board
function createTilePair(){
    // Remove all existing tiles on the game board
    gameBoard.innerHTML = "";
    // Create variables for tile1 and tile2
    let tile1;
    let tile2; 
    // Do some code while a certain condition is true
    do {
        // Call a helper function to create a game tile and assign to tile1
        tile1 = createGameTile();
        // Call a helper function to create a game tile and assign to tile2
        tile2 = createGameTile();
        // While the innerText of tile 1 is not equal to the innerText of tile 2
    } while (tile1.innerText === tile2.innerText);
    // Append the new tiles to the game board
    gameBoard.append(tile1, tile2)
}


// Function to create a game tile (reward or penalty)
// Create a div element and assign to a variable called tile
// Add tile classlist to the newly created div for styling
// Update the backgroundColor to black to hide the tile
// Determine whether it's a reward (positive) or penalty (negative)
// If isReward
// Update text content to +1
// Add event listener to the tile for 'click' events
// Else
// Update text content to -1
// Add event listener to the tile for 'click' events
// Return the tile


// Handle reward tile clicks function
// Accept the tile as an argument
// Check if the game is active
// Set background color to white
// Reset the background color after a brief delay (500ms)
// Reset to black
// Increase the player's score
// Check if the player has won
// If score is greater than winning score
// Call the endGame function and pass true
// Else
// Update the score display and create new tiles after resetting color (render)


// Handle penalty tile clicks function
// Accept the tile as an argument
// Check if the game is active
// Set background color to white
// Reset the background color after a brief delay (500ms)
// Reset to black
// Decrease the player's score
// Decrease remaining lives
// Check if the player has lost
// If lives less than or equal to zero
// Update the lives count to reflect zero lives
// Call the endGame function and pass false
// Else
// Update the score display and create new tiles after resetting color by calling render


// Handle game end function
// Set the game as inactive
// Update the score display
// Show the start button with the text "Replay"
// Show the button
// Re-enable the start button
// Clear the game board
// Clear the lives display




// Game doesn't start until the user clicks the "Start" button
