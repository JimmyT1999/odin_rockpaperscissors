const options = ["rock", "paper", "scissors"];


function getComputerChoice () {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

getComputerChoice();

// function playGame(){
//     let flag = false;

//     while(flag){

//     let user =  prompt("Choose rock, paper, or scissors");

//     let computer = getComputerChoice();
//     console.log(player2);

//     if (computer === user){
//         console.log("It is a draw!")
//     }
//     else if(computer === "rock" && user === scissors){
//         console.log("You lose!")
//     }
//     else if(computer === "paper" && user === rock){
//         console.log("You lose!")
//     }
//     else if(computer === "scissors" && user === paper){
//         console.log("You lose!")
//     } 
//     else{
//         let endGame = prompt("You win!, would you like to play another game? Enter yes or no")
        
//         if (endGame.toLowerCase = yes){
//             playGame()
//         }
//         else if (endGame.toLowerCase = "no"){
//             flag = true;
//         }
//         else{
//             console.log("You didn't give a proper answer!")
//             flag = true;
//         }
//     }
//     }
// }

// console.log("Welcome to the game of rock, paper scissors!")
// playGame();

// console.log("Thank you for playing!")