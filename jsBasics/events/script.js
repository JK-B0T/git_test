function button1() {
    alert("Button ONE has been pressed!");
}

function button2() {
    alert("Button TWO has been pressed!");
}

function button3() {
    alert("Button THREE has been pressed!");
}

const btn2 = document.querySelector("#btn2");
btn2.onclick = button2;

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", button3, false);