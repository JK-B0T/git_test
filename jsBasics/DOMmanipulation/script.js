const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const redP = document.createElement("p");
redP.setAttribute("style", "color: red");
redP.textContent = "Hey I’m red!";

const blueH3 = document.createElement("h3");
blueH3.setAttribute("style", "color: blue");
blueH3.textContent = "I’m a blue h3!";

const pinkRectangle = document.createElement("div");
pinkRectangle.setAttribute("style", "background-color: pink; border: 1px solid black");

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

const meToo = document.createElement("p");
meToo.textContent = "ME TOO!";


container.appendChild(content);
container.appendChild(redP);
container.appendChild(blueH3);

pinkRectangle.appendChild(h1);
pinkRectangle.appendChild(meToo);

container.appendChild(pinkRectangle);

