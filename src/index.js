import "./style.css";
import { renderHome } from "./home.js";
import { renderMenu } from "./menu.js";

renderHome();

document.getElementById("home").addEventListener("click", () => {
  renderHome();
});

document.getElementById("menu").addEventListener("click", () => {
  renderMenu();
});
