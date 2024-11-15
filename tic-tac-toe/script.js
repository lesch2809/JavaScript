var buttons = document.getElementsByTagName("button");

function place(eventObj) {
    var button = eventObj.target; 
    button.innerHTML = "B";
}


for (var i = 0; i < 9; i++) {
    console.log(i);
    buttons[i].addEventListener("click", place);
    /*() => {
        button[i].innerHTML = "B";

    }
    );
    */
}

/*
button[1].addEventListener("click", place);
button[2].addEventListener("click", place);
button[3].addEventListener("click", place);
button[4].addEventListener("click", place);
button[5].addEventListener("click", place);
button[6].addEventListener("click", place);
button[7].addEventListener("click", place);
button[8].addEventListener("click", place);
*/
