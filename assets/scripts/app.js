/**
 * Caching the dom (storing variables for future use)
 */
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

/**
 *  function that makes computer choose rock, paper or scissors
 */
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices [randomNumber]; //return a random element in the array chocies  between index  0 and 2
}

//function to convert from lower case to Upercase
function convertToUppercase(letter){
    if (letter === "rock") return "Rock";
    if (letter === "paper") return "Paper";
    return "Scissors";
}

/**
 * function that increase score for user in case it wins
 */
function win(userChoice, computerChoice){ 
    const userChoice_div = document.getElementById(userChoice);
    userScore++; // increase userScore variable
    userScore_span.innerHTML = userScore; //saves variable userScore_span in html the value of userScore in javascript
    computerScore_span.innerHTML = computerScore; //saves variable computerScore_span in html the value of computerScore in javascript
    result_p.innerHTML = ` ${convertToUppercase(userChoice)} beats ${convertToUppercase(computerChoice)} . You win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(function() {userChoice_div.classList.remove('green-glow') }, 300);
}


function lose(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    computerScore++; // increase computerScore variable
    userScore_span.innerHTML = userScore; //saves variable userScore_span in html the value of userScore in javascript
    computerScore_span.innerHTML = computerScore; //saves variable computerScore_span in html the value of computerScore in javascript
    result_p.innerHTML = ` ${convertToUppercase(userChoice)} loses to ${convertToUppercase(computerChoice)} . You lost!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(function() {userChoice_div.classList.remove('red-glow') }, 300);
}

function draw(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = ` ${convertToUppercase(userChoice)} equals ${convertToUppercase(computerChoice)} . It's a draw`;
    userChoice_div.classList.add('grey-glow');
    setTimeout(function() {userChoice_div.classList.remove('grey-glow') }, 300);
}
/**
 * function that saves the getComputerChoice return in a variable, and it select who wins, lose or draw depending the case
 */
function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){ 
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice); //function win
            break;
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            lose(userChoice, computerChoice); //function lose
            break;
        case "scissorsscissors":
        case "rockrock":
        case "paperpaper":
            draw(userChoice, computerChoice); // function draw
            break;
    }
}

/**
 * Creating function main that has evenListeners inside (clicking in some id elements will trigger the function game passing rock or paper or scissors as arguments)
 */
function main(){
    rock_div.addEventListener('click', function (){
        game("rock"); //using function game with variable rock
    })
    
    paper_div.addEventListener('click', function (){
        game("paper"); //using function game variable paper
    })
    
    scissors_div.addEventListener('click', function (){
        game("scissors"); //using function game variable scissors
    })
}

main(); // to run function main


