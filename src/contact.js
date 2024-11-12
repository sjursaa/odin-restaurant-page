export function loadContactPage() {
  const doc = document.querySelector("#content");
  const header = document.createElement("h1");
  header.innerText = "Hello, welcome to contact page";
  const paragraph = document.createElement("p");
  paragraph.innerText = "this is the reastuarant page and stuff like that";

  doc.replaceChildren();
  doc.appendChild(header);
  doc.appendChild(paragraph);
}
