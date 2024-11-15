var buttons = document.getElementsByTagName("button");
var player = 1;
var i;
var Xwon = false;
var Owon = false;
var currentGameFieldO = [];
var currentGameFieldX = [];
var draw = [];
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

    if (player === 1 && button.innerHTML == "|") {
        button.innerHTML = "O";
        player = 0;

    } else if (player === 0 && button.innerHTML == "|") {

        button.innerHTML = "X";
        player = 1;


    }
    checkifwon()
}

function checkifwon() {
    currentGameFieldX = [];
    currentGameFieldO = [];
    draw = [];
    for (var j = 1; j < 10; j++) {
        var buttonNR = document.getElementById("button" + j).textContent
        if (buttonNR === "X") {
            currentGameFieldX.push(j);
            draw.push(j);
        }
        if (buttonNR === "O") {
            currentGameFieldO.push(j);
            draw.push(j);
        }


    } 

    for (var i = 0; i < winningCombination.length; i++) {
        if (currentGameFieldX.includes(winningCombination[i][0])
            && currentGameFieldX.includes(winningCombination[i][1])
            && currentGameFieldX.includes(winningCombination[i][2])) {
            Xwon = true;
        }
    }
    for (var i = 0; i < winningCombination.length; i++) {
        if (currentGameFieldO.includes(winningCombination[i][0])
            && currentGameFieldO.includes(winningCombination[i][1])
            && currentGameFieldO.includes(winningCombination[i][2])) {
            Owon = true;
        }
    }
    

    if (Xwon === true) {
        document.write("X has won");
    }
    else if (Owon === true) {
        document.write(<p>O has won</p>);
    }
    else if (draw.length === 9) {
        alert("Draw");
    }
}

for (i = 0; i < 9; i++) {
    console.log(i);
    buttons[i].addEventListener("click", place);


}


