import "./styles.css";
import { pageload } from "./pageload.js";
import { loadMenuPage } from "./menu.js";
import { loadContactPage } from "./contact.js";

pageload();

// TODO: Add color to current page button
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
