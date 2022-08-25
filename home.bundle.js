/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHome": () => (/* binding */ renderHome)
/* harmony export */ });
function renderHome() {
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3AvLi9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBmdW5jdGlvbiByZW5kZXJIb21lKCkge1xuICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIC8vQ3JlYXRlIGhvbWVcbiAgbGV0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob21lRGl2LmlkID0gXCJob21lRGl2XCI7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZURpdik7XG5cbiAgLy9DcmVhdGUgaW5mb1xuICBsZXQgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGluZm8uaWQgPSBcImluZm9cIjtcbiAgaG9tZURpdi5hcHBlbmRDaGlsZChpbmZvKTtcblxuICBsZXQgaW5mb0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGluZm9IZWFkaW5nLnRleHRDb250ZW50ID0gXCJJbmZvcm1hdGlvblwiO1xuICBpbmZvLmFwcGVuZENoaWxkKGluZm9IZWFkaW5nKTtcblxuICBsZXQgaW5mb0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaW5mb0NvbnRlbnQudGV4dENvbnRlbnQgPVxuICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQXNzdW1lbmRhLCBjb25zZXF1dW50dXIgaWxsbywgZGVsZW5pdGkgZG9sb3J1bSBpcHNhIHF1YW0gbWludXMgaXRhcXVlIG5pc2kgcmF0aW9uZSBvZmZpY2lhLCBhbGlhcyBsYWJvcmlvc2FtIHBvc3NpbXVzIHBhcmlhdHVyIGF0cXVlIG9kaXQgcXVvIG1vbGVzdGlhcyBwcm92aWRlbnQhIFRlbXBvcmEhXCI7XG4gIGluZm8uYXBwZW5kQ2hpbGQoaW5mb0NvbnRlbnQpO1xuXG4gIC8vQ3JlYXRlIHRpbWV0YWJsZVxuICBsZXQgdGltZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aW1lcy5pZCA9IFwidGltZXNcIjtcbiAgaG9tZURpdi5hcHBlbmRDaGlsZCh0aW1lcyk7XG5cbiAgbGV0IHRpbWVzSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgdGltZXNIZWFkaW5nLnRleHRDb250ZW50ID0gXCJUaW1lc1wiO1xuICB0aW1lcy5hcHBlbmRDaGlsZCh0aW1lc0hlYWRpbmcpO1xuXG4gIGxldCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgdGltZXMuYXBwZW5kQ2hpbGQodGFibGUpO1xuXG4gIGxldCBtb25kYXlSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gIHRhYmxlLmFwcGVuZENoaWxkKG1vbmRheVJvdyk7XG5cbiAgbGV0IG1vbmRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgbW9uZGF5LnRleHRDb250ZW50ID0gXCJNb25kYXlcIjtcbiAgbW9uZGF5Um93LmFwcGVuZENoaWxkKG1vbmRheSk7XG5cbiAgbGV0IE1vbmRheVRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gIE1vbmRheVRpbWUudGV4dENvbnRlbnQgPSBcIjk6MDAgLSAyMjowMFwiO1xuICBtb25kYXlSb3cuYXBwZW5kQ2hpbGQoTW9uZGF5VGltZSk7XG5cbiAgbGV0IHR1ZXNkYXlSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gIHRhYmxlLmFwcGVuZENoaWxkKHR1ZXNkYXlSb3cpO1xuXG4gIGxldCB0dWVzZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICB0dWVzZGF5LnRleHRDb250ZW50ID0gXCJUdWVzZGF5XCI7XG4gIHR1ZXNkYXlSb3cuYXBwZW5kQ2hpbGQodHVlc2RheSk7XG5cbiAgbGV0IHR1ZXNkYXlUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICB0dWVzZGF5VGltZS50ZXh0Q29udGVudCA9IFwiOTowMCAtIDIyOjAwXCI7XG4gIHR1ZXNkYXlSb3cuYXBwZW5kQ2hpbGQodHVlc2RheVRpbWUpO1xuXG4gIGxldCB3ZWRuZXNkYXlSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gIHRhYmxlLmFwcGVuZENoaWxkKHdlZG5lc2RheVJvdyk7XG5cbiAgbGV0IHdlZG5lc2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgd2VkbmVzZGF5LnRleHRDb250ZW50ID0gXCJXZWRuZXNkYXlcIjtcbiAgd2VkbmVzZGF5Um93LmFwcGVuZENoaWxkKHdlZG5lc2RheSk7XG5cbiAgbGV0IHdlZG5lc2RheVRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gIHdlZG5lc2RheVRpbWUudGV4dENvbnRlbnQgPSBcIjk6MDAgLSAyMjowMFwiO1xuICB3ZWRuZXNkYXlSb3cuYXBwZW5kQ2hpbGQod2VkbmVzZGF5VGltZSk7XG5cbiAgbGV0IHRodXJzZGF5Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICB0YWJsZS5hcHBlbmRDaGlsZCh0aHVyc2RheVJvdyk7XG5cbiAgbGV0IHRodXJzZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICB0aHVyc2RheS50ZXh0Q29udGVudCA9IFwiVGh1cnNkYXlcIjtcbiAgdGh1cnNkYXlSb3cuYXBwZW5kQ2hpbGQodGh1cnNkYXkpO1xuXG4gIGxldCB0aHVyc2RheVRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gIHRodXJzZGF5VGltZS50ZXh0Q29udGVudCA9IFwiOTowMCAtIDIyOjAwXCI7XG4gIHRodXJzZGF5Um93LmFwcGVuZENoaWxkKHRodXJzZGF5VGltZSk7XG5cbiAgbGV0IGZyaWRheVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgdGFibGUuYXBwZW5kQ2hpbGQoZnJpZGF5Um93KTtcblxuICBsZXQgZnJpZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICBmcmlkYXkudGV4dENvbnRlbnQgPSBcIkZyaWRheVwiO1xuICBmcmlkYXlSb3cuYXBwZW5kQ2hpbGQoZnJpZGF5KTtcblxuICBsZXQgZnJpZGF5VGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgZnJpZGF5VGltZS50ZXh0Q29udGVudCA9IFwiOTowMCAtIDIyOjAwXCI7XG4gIGZyaWRheVJvdy5hcHBlbmRDaGlsZChmcmlkYXlUaW1lKTtcblxuICAvL0NyZWF0ZSBsb2NhdGlvblxuICBsZXQgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsb2NhdGlvbi5pZCA9IFwibG9jYXRpb25cIjtcbiAgaG9tZURpdi5hcHBlbmRDaGlsZChsb2NhdGlvbik7XG5cbiAgbGV0IGxvY2F0aW9uSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgbG9jYXRpb25IZWFkaW5nLnRleHRDb250ZW50ID0gXCJMb2NhdGlvblwiO1xuICBsb2NhdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvbkhlYWRpbmcpO1xuXG4gIGxldCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGFkZHJlc3MudGV4dENvbnRlbnQgPSBcIjEyMyBTdWdhcmNhbmUgTGFuZSwgQ2FuZHl2aWxsZSwgVGV4YXNcIjtcbiAgbG9jYXRpb24uYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=