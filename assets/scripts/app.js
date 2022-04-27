/**
 * Caching the dom (storing variables for future use)
 */
let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
let result_p = document.querySelector(".result > p");
let rock_div = document.getElementById("rock");
let paper_div = document.getElementById("paper");
let scissors_div = document.getElementById("scissors");


/**
 * Mobile display nav event listener
 */

 let menu = document.querySelector('nav ul');
 let door = document.querySelector('nav .mobile');
 door.addEventListener('click', function(){
     menu.classList.toggle('show');
 });


 /**
  * Blinker effect
  */
let messageArray = ["Play Rock Paper Scissors!"];
let textPosition = 0;
let speed = 100;


 function typewriter () {  /*typewriter = () =>*/ 
    document.querySelector("#message").
    innerHTML = messageArray[0].substring(0, textPosition) + "<span>\u25ae</span>";
    
    if(textPosition++ != messageArray[0].length)
        setTimeout(typewriter, speed);
};

/*window.addEventListener("load", typewriter)*/
function initializeGame() {
    play();
    typewriter();
 }
 window.addEventListener("load", initializeGame);
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
    setTimeout(function() {userChoice_div.classList.remove('green-glow') }, 350);
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
function gameRockPaperScissors(userChoice){
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
 * Creating function play that has evenListeners inside (clicking in some id elements will trigger the function game passing rock or paper or scissors as arguments)
 */
function play(){
    rock_div.addEventListener('click', function (){
        gameRockPaperScissors("rock"); //using function gameRockPaperScissors with variable rock
    });
    
    paper_div.addEventListener('click', function (){
        gameRockPaperScissors("paper"); //using function gameRockPaperScissors variable paper
    });
    
    scissors_div.addEventListener('click', function (){
        gameRockPaperScissors("scissors"); //using function gameRockPaperScissors variable scissors
    });
}




