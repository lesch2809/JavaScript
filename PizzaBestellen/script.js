window.addEventListener("load", initialize);

function initialize() {
    document.getElementById("add").addEventListener("click", add);
    document.getElementById("remove").addEventListener("click", remove);
}

function add() {
    var ingredients = document.getElementById("ingredients");
    
    if (ingredients.selectedIndex > -1 ) {
        var idxI = ingredients.selectedIndex
        if (ingredients.getElementsByTagName("option")[idxI].textContent == "Ananas")  {
            document.getElementsByTagName("body")[0].setAttribute("style", "background-color:red;")
            
        }else{
        
        var ingredientI = ingredients.getElementsByTagName("option")[idxI]
        choice.appendChild(ingredientI)
        }
        
        //todo: ausgewählte Zutat von der linken in die rechte Listbox verschieben 
    }
    
}

function remove() {
    var choice = document.getElementById("choice");
    
    if (choice.selectedIndex > -1 ) {
        var idxC = choice.selectedIndex
        var ingredientC = choice.getElementsByTagName("option")[idxC]
        ingredients.appendChild(ingredientC)
        //todo: ausgewählte Zutat von der rechten in die linke Listbox verschieben
    }
}