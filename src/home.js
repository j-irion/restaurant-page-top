export function renderHome() {
  let content = document.getElementById("content");
  content.innerHTML = "";

  //Create home
  let homeDiv = document.createElement("div");
  homeDiv.id = "homeDiv";
  content.appendChild(homeDiv);

  //Create info
  let info = document.createElement("div");
  info.id = "info";
  homeDiv.appendChild(info);

  let infoHeading = document.createElement("h2");
  infoHeading.textContent = "Information";
  info.appendChild(infoHeading);

  let infoContent = document.createElement("p");
  infoContent.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, consequuntur illo, deleniti dolorum ipsa quam minus itaque nisi ratione officia, alias laboriosam possimus pariatur atque odit quo molestias provident! Tempora!";
  info.appendChild(infoContent);

  //Create timetable
  let times = document.createElement("div");
  times.id = "times";
  homeDiv.appendChild(times);

  let timesHeading = document.createElement("h2");
  timesHeading.textContent = "Times";
  times.appendChild(timesHeading);

  let table = document.createElement("table");
  times.appendChild(table);

  let mondayRow = document.createElement("tr");
  table.appendChild(mondayRow);

  let monday = document.createElement("td");
  monday.textContent = "Monday";
  mondayRow.appendChild(monday);

  let MondayTime = document.createElement("td");
  MondayTime.textContent = "9:00 - 22:00";
  mondayRow.appendChild(MondayTime);

  let tuesdayRow = document.createElement("tr");
  table.appendChild(tuesdayRow);

  let tuesday = document.createElement("td");
  tuesday.textContent = "Tuesday";
  tuesdayRow.appendChild(tuesday);

  let tuesdayTime = document.createElement("td");
  tuesdayTime.textContent = "9:00 - 22:00";
  tuesdayRow.appendChild(tuesdayTime);

  let wednesdayRow = document.createElement("tr");
  table.appendChild(wednesdayRow);

  let wednesday = document.createElement("td");
  wednesday.textContent = "Wednesday";
  wednesdayRow.appendChild(wednesday);

  let wednesdayTime = document.createElement("td");
  wednesdayTime.textContent = "9:00 - 22:00";
  wednesdayRow.appendChild(wednesdayTime);

  let thursdayRow = document.createElement("tr");
  table.appendChild(thursdayRow);

  let thursday = document.createElement("td");
  thursday.textContent = "Thursday";
  thursdayRow.appendChild(thursday);

  let thursdayTime = document.createElement("td");
  thursdayTime.textContent = "9:00 - 22:00";
  thursdayRow.appendChild(thursdayTime);

  let fridayRow = document.createElement("tr");
  table.appendChild(fridayRow);

  let friday = document.createElement("td");
  friday.textContent = "Friday";
  fridayRow.appendChild(friday);

  let fridayTime = document.createElement("td");
  fridayTime.textContent = "9:00 - 22:00";
  fridayRow.appendChild(fridayTime);

  //Create location
  let location = document.createElement("div");
  location.id = "location";
  homeDiv.appendChild(location);

  let locationHeading = document.createElement("h2");
  locationHeading.textContent = "Location";
  location.appendChild(locationHeading);

  let address = document.createElement("span");
  address.textContent = "123 Sugarcane Lane, Candyville, Texas";
  location.appendChild(address);
}
