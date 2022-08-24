import "./style.css";
import { renderHome } from "./home.js";

renderHome();

document.getElementById("home").addEventListener("click", () => {
  renderHome();
});
