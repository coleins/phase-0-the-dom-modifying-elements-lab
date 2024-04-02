const element = document.querySelector("#main");
element.remove();

// Create an <h1> element
const newHeader = document.createElement("h1");

// Set the id attribute of the <h1> element to 'victory'
newHeader.id = "victory";

// Append the <h1> element to the document body (or another element)
document.body.appendChild(newHeader);
