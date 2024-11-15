var buttons = document.getElementsByTagName("button");
var player = 1
var i
var currentGameFieldO = []
var currentGameFieldX = []
var winningCombination = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
];

function place(eventObj) {
    var button = eventObj.target;

    if (player === 1) {
        button.innerHTML = "O";
        player = 0;
        
        
        
    } else {
        button.innerHTML = "X";
        player = 1;
        
        
        
    }
    checkifwon()
}

function checkifwon() {
    currentGameFieldX = []
    currentGameFieldO = []
    for (var j = 1; j < 9; j++) {
        var buttonNR=document.getElementById("button" + j).textContent
        if (buttonNR==="X"){
         currentGameFieldX.push(j)
        }
        if (buttonNR==="O"){
         currentGameFieldO.push(j)
        }
        
    } alert(currentGameFieldO)

    for (var i = 0; i < winningCombination.length; i++) {
        if (buttons[winningCombination[i][0]] == winningCombination[i][1] in currentGameFieldX && winningCombination[i][2] in currentGameFieldX) {
            return true
        }else{
            return false
        }
    }
    for (var i = 0; i < winningCombination.length; i++) {
        if (winningCombination[i][0] in currentGameFieldO && winningCombination[i][1] in currentGameFieldO && winningCombination[i][2] in currentGameFieldO) {
            return true
        }else{
            return false
        }
    }
    
    alert(currentGameFieldO)
}


for (i = 0; i < 9; i++) {
    console.log(i);
    buttons[i].addEventListener("click", place);

    /*() => {
        button[i].innerHTML = "B";

    }
    );
    */
}


