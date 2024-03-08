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

const btn = document.querySelector("#btn");
btn.addEventListener('click', function (e) {
    //console.log(e);
    if (e.target.style.background != 'blue') {
        e.target.style.background = 'blue';
        e.target.style.color = 'white';
    } else {
        e.target.style.background = 'red';
        e.target.style.color = 'black';
    }
});

const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    console.log(button.id);
  });
});