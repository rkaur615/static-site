// Find ONE element by its id
document.getElementById("my-id")
// Find the FIRST element matching a CSS selector
document.querySelector(".my-class")
document.querySelector("#my-id")
document.querySelector("p")
// Find ALL elements matching a CSS selector
document.querySelectorAll(".card")



// 1. Find the button and the div
const button = document.getElementById("magic-button");
const box = document.getElementById("message-box");
// 2. Listen for a click on the button
button.addEventListener("click", function() {
// 3. When clicked, run this function:
changeMessage();
});

function changeMessage() {
  // Change the text inside the div
  box.textContent = " You clicked! I have been changed by JavaScript!";
  // Change the background color using inline CSS
  box.style.backgroundColor = "lightgreen";
  // Add a CSS class (defined in style.css)
  box.classList.add("success-box");
}
