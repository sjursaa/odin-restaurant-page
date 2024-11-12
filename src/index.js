import "./styles.css";
import { pageload } from "./pageload.js";
import { loadMenuPage } from "./menu.js";
import { loadContactPage } from "./contact.js";

// TODO: remove these lines
pageload();
console.log("hello world");

// TODO: add tab switching in here
// TODO: add event listeners to each navbar button
//
const homeButton = document.querySelector("#home");
homeButton.onclick = () => {
  pageload();
};

const menuButton = document.querySelector("#menu");
menuButton.onclick = () => {
  loadMenuPage();
};

const aboutButton = document.querySelector("#about");
aboutButton.onclick = () => {
  loadContactPage();
};
