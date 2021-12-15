const squares = document.querySelectorAll("button");
const turntext = document.getElementById("player-turn");
var player = "X";

$(".square").click(function(){
    fillSquare(this);
    changePlayer();
    checkWin();
});

function fillSquare(square){
    square.innerHTML = player;
    $(square).attr("disabled","true");
}

function changePlayer(){
    if(player == "X")
    {
        player = "O";
    }else{
        player = "X"
    }
    turntext.innerHTML = "Player " + player + "'s turn";
}

function isChecked(square){
    if (square.innerHTML == "X") {
        return "X";
    }
    if(square.innerHTML == "O"){
        return "O";
    }
}

function endGame(){
    var time = 0;
    changePlayer();
    squares.forEach(square => {
        time+=200;
        setTimeout(() => fillSquare(square), time);
    });
    $(turntext).text("Player " + player + " won");
}


function checkWin()
{
    // Horizontal win conditions
    if (isChecked(squares[0]) == "X" && isChecked(squares[1]) == "X" && isChecked(squares[2]) == "X"
    || isChecked(squares[0]) == "O" && isChecked(squares[1]) == "O" && isChecked(squares[2]) == "O") {
        endGame();
    }

    else if (isChecked(squares[3]) == "X" && isChecked(squares[4]) == "X" && isChecked(squares[5]) == "X"
    || isChecked(squares[3]) == "O" && isChecked(squares[4]) == "O" && isChecked(squares[5]) == "O") {
        endGame();
    }

    else if (isChecked(squares[6]) == "X" && isChecked(squares[7]) == "X" && isChecked(squares[8]) == "X"
    || isChecked(squares[6]) == "O" && isChecked(squares[7]) == "O" && isChecked(squares[8]) == "O") {
        endGame();
    }
    
    // Vertical win conditions

    else if (isChecked(squares[0]) == "X" && isChecked(squares[3]) == "X" && isChecked(squares[6]) == "X"
    || isChecked(squares[0]) == "O" && isChecked(squares[3]) == "O" && isChecked(squares[6]) == "O") {
        endGame();
    }

    else if (isChecked(squares[1]) == "X" && isChecked(squares[4]) == "X" && isChecked(squares[7]) == "X"
    || isChecked(squares[1]) == "O" && isChecked(squares[4]) == "O" && isChecked(squares[7]) == "O") {
        endGame();
    }

    else if (isChecked(squares[2]) == "X" && isChecked(squares[5]) == "X" && isChecked(squares[8]) == "X"
    || isChecked(squares[2]) == "O" && isChecked(squares[5]) == "O" && isChecked(squares[8]) == "O") {
        endGame();
    }

    // Diagonal win conditions
    
    else if (isChecked(squares[0]) == "X" && isChecked(squares[4]) == "X" && isChecked(squares[8]) == "X"
    || isChecked(squares[0]) == "O" && isChecked(squares[4]) == "O" && isChecked(squares[8]) == "O") {
        endGame();
    }

    else if (isChecked(squares[2]) == "X" && isChecked(squares[4]) == "X" && isChecked(squares[6]) == "X"
    || isChecked(squares[2]) == "O" && isChecked(squares[4]) == "O" && isChecked(squares[6]) == "O") {
        endGame();
    }
}