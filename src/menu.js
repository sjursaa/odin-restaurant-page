export function loadMenuPage() {
  const doc = document.querySelector("#content");
  const header = document.createElement("h1");
  header.innerText = "Hello, welcome to the menu page";
  const paragraph = document.createElement("p");
  paragraph.innerText = "this is the reastuarant page and stuff like that";
  doc.replaceChildren();
  doc.appendChild(header);
  doc.appendChild(paragraph);
}