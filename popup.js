// Initialize button with user's preferred color

/*
This code grabs the button from popup.html and requests the color value from storage.
It then applies the color as the background of the button.
Include a script tag to popup.js in popup.html.
*/

let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});
