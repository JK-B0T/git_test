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
    const input = document.querySelector("#listInput")
    const listInput = input.value;
    input.value = "";
    input.focus();

    const liElement = document.createElement("li");
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";
    liElement.textContent = listInput + " ";
    liElement.classList.add(listInput);

    deleteBtn.addEventListener("click", deleteShoppingListItem, false);

    liElement.appendChild(deleteBtn);
    shoppingList.appendChild(liElement);
}

function deleteShoppingListItem (e) {
    e.target.removeEventListener("click", deleteShoppingListItem, false);
    shoppingList.removeChild(e.target.parentNode);
}

//Selected Elements
const addItemBtn = document.querySelector("#addItemBtn");
const shoppingList = document.querySelector("#shoppingList");

//Event Listeners
addItemBtn.addEventListener("click", addShoppingListItem, false);
