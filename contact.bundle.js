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
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderContact": () => (/* binding */ renderContact)
/* harmony export */ });
function renderContact() {
  let content = document.getElementById("content");
  content.innerHTML = "";

  let contactDiv = document.createElement("div");
  contactDiv.id = "contactDiv";
  content.appendChild(contactDiv);

  //Create address
  let address = document.createElement("div");
  address.id = "address";
  contactDiv.appendChild(address);

  let addressHeading = document.createElement("h2");
  addressHeading.textContent = "Mail Address";
  address.appendChild(addressHeading);

  let addressContent = document.createElement("p");
  addressContent.textContent =
    "Ben Franklin 123 Sugarcane Lane, Candyville, Texas";
  address.appendChild(addressContent);

  //Create phone number
  let tel = document.createElement("div");
  tel.id = "tel";
  contactDiv.appendChild(tel);

  let telHeading = document.createElement("h2");
  telHeading.textContent = "Phone Number";
  tel.appendChild(telHeading);

  let telContent = document.createElement("span");
  telContent.textContent = "202-555-0191";
  tel.appendChild(telContent);

  //Create Email address
  let email = document.createElement("div");
  email.id = "email";
  contactDiv.appendChild(email);

  let emailHeading = document.createElement("h2");
  emailHeading.textContent = "E-Mail Address";
  email.appendChild(emailHeading);

  let emailContent = document.createElement("span");
  emailContent.textContent = "contact@awesome-restaurant.com";
  email.appendChild(emailContent);
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wLy4vc3JjL2NvbnRhY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZnVuY3Rpb24gcmVuZGVyQ29udGFjdCgpIHtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcblxuICBsZXQgY29udGFjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhY3REaXYuaWQgPSBcImNvbnRhY3REaXZcIjtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0RGl2KTtcblxuICAvL0NyZWF0ZSBhZGRyZXNzXG4gIGxldCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWRkcmVzcy5pZCA9IFwiYWRkcmVzc1wiO1xuICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuXG4gIGxldCBhZGRyZXNzSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgYWRkcmVzc0hlYWRpbmcudGV4dENvbnRlbnQgPSBcIk1haWwgQWRkcmVzc1wiO1xuICBhZGRyZXNzLmFwcGVuZENoaWxkKGFkZHJlc3NIZWFkaW5nKTtcblxuICBsZXQgYWRkcmVzc0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYWRkcmVzc0NvbnRlbnQudGV4dENvbnRlbnQgPVxuICAgIFwiQmVuIEZyYW5rbGluIDEyMyBTdWdhcmNhbmUgTGFuZSwgQ2FuZHl2aWxsZSwgVGV4YXNcIjtcbiAgYWRkcmVzcy5hcHBlbmRDaGlsZChhZGRyZXNzQ29udGVudCk7XG5cbiAgLy9DcmVhdGUgcGhvbmUgbnVtYmVyXG4gIGxldCB0ZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0ZWwuaWQgPSBcInRlbFwiO1xuICBjb250YWN0RGl2LmFwcGVuZENoaWxkKHRlbCk7XG5cbiAgbGV0IHRlbEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHRlbEhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlBob25lIE51bWJlclwiO1xuICB0ZWwuYXBwZW5kQ2hpbGQodGVsSGVhZGluZyk7XG5cbiAgbGV0IHRlbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgdGVsQ29udGVudC50ZXh0Q29udGVudCA9IFwiMjAyLTU1NS0wMTkxXCI7XG4gIHRlbC5hcHBlbmRDaGlsZCh0ZWxDb250ZW50KTtcblxuICAvL0NyZWF0ZSBFbWFpbCBhZGRyZXNzXG4gIGxldCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVtYWlsLmlkID0gXCJlbWFpbFwiO1xuICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGVtYWlsKTtcblxuICBsZXQgZW1haWxIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBlbWFpbEhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkUtTWFpbCBBZGRyZXNzXCI7XG4gIGVtYWlsLmFwcGVuZENoaWxkKGVtYWlsSGVhZGluZyk7XG5cbiAgbGV0IGVtYWlsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBlbWFpbENvbnRlbnQudGV4dENvbnRlbnQgPSBcImNvbnRhY3RAYXdlc29tZS1yZXN0YXVyYW50LmNvbVwiO1xuICBlbWFpbC5hcHBlbmRDaGlsZChlbWFpbENvbnRlbnQpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9