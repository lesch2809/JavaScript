var buttons = document.getElementsByTagName("button");
var player = 1
var i
var Xwon = false;
var Owon = false;
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
        if ( currentGameFieldX.includes(winningCombination[i][0])
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
    
    if (Xwon === true){
        alert("Xwon");
    }
    if (Owon === true){
        alert("Owon");
    }
    
}


for (i = 0; i < 9; i++) {
    console.log(i);
    buttons[i].addEventListener("click", place);

    
}


