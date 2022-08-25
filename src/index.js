import "./style.css";
import { renderHome } from "./home.js";
import { renderMenu } from "./menu.js";
import { renderContact } from "./contact.js";

renderHome();

document.getElementById("home").addEventListener("click", () => {
  renderHome();
});

document.getElementById("menu").addEventListener("click", () => {
  renderMenu();
});

document.getElementById("contact").addEventListener("click", () => {
  renderContact();
});
