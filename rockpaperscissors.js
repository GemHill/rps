var test = function(){
    var uChoice = document.getElementById("youChoice").value
    var cChoice = cpuChoice();
    showResult(uChoice, cChoice);
};

/*var userChoice = function(){
    return prompt("Do you choose rock, paper or scissors?");
}
*/

var cpuChoice = function(){
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

var compare = function(choice1, choice2){
    if (choice1 == choice2) {
        return "The result is a tie!";
    }
    if (choice1 == "rock") {
        if (choice2 == "scissors"){
            return "you win";
        }    else {
            return "you lose";    
        }
    }
    if (choice1 == "paper") {
        if (choice2 == "rock"){
            return "you win";
        }   else {
            return "you lose";
        }
    }
    if (choice1 == "scissors") {
        if (choice2 == "rock"){
            return "you lose";
        } else {
            return "you win";
        }
    }
    return "Please enter rock, paper, or scissors!";
}


var showResult = function(userChoice, computerChoice){
    var result = compare(userChoice, computerChoice);
    alert(result);
}; 



/*var test = function(){
    var test2 = document.getElementById("youChoice").value
    alert(test2);
}*/


