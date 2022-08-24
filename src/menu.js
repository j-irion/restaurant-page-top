import Steak from "./steak.jpg";

export function renderMenu() {
  let content = document.getElementById("content");
  content.innerHTML = "";

  //Create menu
  let menuDiv = document.createElement("div");
  menuDiv.id = "menuDiv";
  content.appendChild(menuDiv);

  //Create photo
  let steak = new Image();
  steak.src = Steak;
  menuDiv.appendChild(steak);

  //Create license
  let license = document.createElement("div");
  license.id = "license";
  license.innerHTML =
    'Photo by <a href="https://unsplash.com/@justusmenke?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Justus Menke</a> on <a href="https://unsplash.com/s/photos/steak?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
  menuDiv.appendChild(license);

  //Create menu items
  let table = document.createElement("table");
  menuDiv.appendChild(table);

  let rowOne = document.createElement("tr");
  table.appendChild(rowOne);

  let itemOne = document.createElement("td");
  itemOne.textContent = "Item 1";
  rowOne.appendChild(itemOne);

  let priceOne = document.createElement("td");
  priceOne.textContent = "9$";
  rowOne.appendChild(priceOne);

  table.appendChild(document.createElement("hr"));

  let rowTwo = document.createElement("tr");
  table.appendChild(rowTwo);

  let itemTwo = document.createElement("td");
  itemTwo.textContent = "Item 2";
  rowTwo.appendChild(itemTwo);

  let priceTwo = document.createElement("td");
  priceTwo.textContent = "18$";
  rowTwo.appendChild(priceTwo);

  table.appendChild(document.createElement("hr"));

  let rowThree = document.createElement("tr");
  table.appendChild(rowThree);

  let itemThree = document.createElement("td");
  itemThree.textContent = "Item 3";
  rowThree.appendChild(itemThree);

  let priceThree = document.createElement("td");
  priceThree.textContent = "4.5$";
  rowThree.appendChild(priceThree);
}
