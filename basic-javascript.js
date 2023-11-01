const h1Element = document.createElement("h1");
const rootContainter =  document.getElementById("js-root-container");

h1Element.innerHTML = "Hello World!! with pure-js";
rootContainter.appendChild(h1Element);
