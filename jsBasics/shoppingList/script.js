/*
inputs:
    -a text input where the user puts the shop item
    -an "Add item" button input that activates when clicked,
    it calls a fuction to retrieve the string in the text input.
    -a undefined number of "Delete" buttons that activate when clicked,
    they call a fuction that eliminate their conteiner and all it's childs.

outputs: 
    -a function that, when "Add item" is clicked, if the text area is not empty
    then gets his string and appends it as a <li> item to an <ul> item with a "Delete" buttonn inside.
    -a function that, when "Delete" is clicked, removes the <li> item in which is contained.
*/

function addShoppingListItem () {
    const listInput = document.querySelector("#listInput").value;

    if(listInput == " ") {
        alert("ERROR: Empty input");
    } else {
        const liElement = document.createElement("li");
        const deleteBtn = document.createElement("button");
    
        deleteBtn.textContent = "Delete";
        liElement.textContent = listInput + " ";
        liElement.classList.add(listInput);
    
        deleteBtn.addEventListener("click", deleteShoppingListItem, false);
    
        liElement.appendChild(deleteBtn);
        shoppingList.appendChild(liElement);
    }
}

function deleteShoppingListItem (e) {
    console.log(e.target.getAttribute("class"));
    console.log(e.target);
    shoppingList.removeChild(e.target.getAttribute("class"));
}

//Selected Elements
const addItemBtn = document.querySelector("#addItemBtn");
const shoppingList = document.querySelector("#shoppingList");

//Event Listeners
addItemBtn.addEventListener("click", addShoppingListItem, false);
