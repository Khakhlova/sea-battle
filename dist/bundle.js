/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/main.js */ \"./src/js/main.js\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.css */ \"./src/css/main.css\");\n\n\n\n//# sourceURL=webpack://sea-battle/./src/app.js?");

/***/ }),

/***/ "./src/js/checkShipPlace.js":
/*!**********************************!*\
  !*** ./src/js/checkShipPlace.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkShipPlace)\n/* harmony export */ });\nfunction checkShipPlace(field, x, y, direction, length) {\n  let minX, maxX, minY, maxY;\n\n  if (direction === 'vertical') {\n    if (x + length - 1 > 9) return false;\n    minX = x === 0 ? 0 : x - 1;\n    maxX = x + length > 9 ? 9 : x + length;\n    minY = y === 0 ? 0 : y - 1;\n    maxY = y + 1 > 9 ? 9 : y + 1;\n  }\n\n  if (direction === 'horizontal') {\n    if (y + length - 1 > 9) return false;\n    minX = x === 0 ? 0 : x - 1;\n    maxX = x + 1 > 9 ? 9 : x + 1;\n    minY = y === 0 ? 0 : y - 1;\n    maxY = y + length > 9 ? 9 : y + length;\n  }\n\n  for (let i = minX; i <= maxX; i++) {\n    for (let j = minY; j <= maxY; j++) {\n      if (field[i][j] === 1) return false;\n    }\n  }\n\n  return true;\n}\n\n//# sourceURL=webpack://sea-battle/./src/js/checkShipPlace.js?");

/***/ }),

/***/ "./src/js/generateRandomField.js":
/*!***************************************!*\
  !*** ./src/js/generateRandomField.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generateRandomField)\n/* harmony export */ });\n/* harmony import */ var _getMatrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getMatrix */ \"./src/js/getMatrix.js\");\n/* harmony import */ var _getRandom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getRandom */ \"./src/js/getRandom.js\");\n/* harmony import */ var _checkShipPlace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkShipPlace */ \"./src/js/checkShipPlace.js\");\n\n\n\nfunction generateRandomField(ships, userShips) {\n  let possibleCoord = 0;\n  let field = (0,_getMatrix__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  let x, y;\n  let direction;\n  let shipCounter = 0;\n\n  for (let i = 0; i < 4; i++) {\n    let shipLength = ships[i][1];\n    let shipAmmount = ships[i][2];\n\n    for (let j = 0; j < shipAmmount; j++) {\n      possibleCoord = 0;\n      shipCounter++;\n      userShips[shipCounter] = [];\n\n      while (possibleCoord === 0) {\n        direction = (0,_getRandom__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(1) ? 'vertical' : 'horizontal';\n        x = (0,_getRandom__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(9);\n        y = (0,_getRandom__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(9);\n\n        if (direction === 'vertical') {\n          if ((0,_checkShipPlace__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(field, x, y, direction, shipLength)) {\n            for (let k = 0; k < shipLength; k++) {\n              field[x + k][y] = 1;\n              userShips[shipCounter].push([x + k, y, 0]);\n              console.log(userShips);\n            }\n\n            possibleCoord = 1;\n          }\n        }\n\n        if (direction === 'horizontal') {\n          if ((0,_checkShipPlace__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(field, x, y, direction, shipLength)) {\n            for (let l = 0; l < shipLength; l++) {\n              field[x][y + l] = 1;\n              userShips[shipCounter].push([x, y + l, 0]);\n              console.log(userShips);\n            }\n\n            possibleCoord = 1;\n          }\n        }\n      }\n    }\n  }\n\n  return field;\n}\n\n//# sourceURL=webpack://sea-battle/./src/js/generateRandomField.js?");

/***/ }),

/***/ "./src/js/getMatrix.js":
/*!*****************************!*\
  !*** ./src/js/getMatrix.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getMatrix)\n/* harmony export */ });\nfunction getMatrix() {\n  let x = 10,\n      y = 10;\n  let matrix = [];\n\n  for (let i = 0; i < x; i++) {\n    matrix[i] = [];\n\n    for (let j = 0; j < 10; j++) {\n      matrix[i][j] = 0;\n    }\n  }\n\n  console.log(matrix);\n  return matrix;\n}\n\n//# sourceURL=webpack://sea-battle/./src/js/getMatrix.js?");

/***/ }),

/***/ "./src/js/getRandom.js":
/*!*****************************!*\
  !*** ./src/js/getRandom.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getRandom)\n/* harmony export */ });\nfunction getRandom(n) {\n  return Math.floor(Math.random() * (n + 1));\n}\n\n//# sourceURL=webpack://sea-battle/./src/js/getRandom.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _generateRandomField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateRandomField */ \"./src/js/generateRandomField.js\");\n/* harmony import */ var _printField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./printField */ \"./src/js/printField.js\");\n\n\nconst username1 = 'Player1',\n      username2 = 'Player2',\n      username1Place = document.getElementById('player1-place'),\n      username2Place = document.getElementById('player2-place');\nconst shipTypes = [['Линкор', 4, 1], ['Крейсер', 3, 2], ['Эсминец', 2, 3], ['Катер', 1, 4]];\nlet playerField = [],\n    opponentField = [],\n    playerShips = [],\n    opponentShips = [];\n\nfunction gameStart() {\n  username1Place.innerHTML = username1;\n  username2Place.innerHTML = username2;\n  playerField = (0,_generateRandomField__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(shipTypes, playerShips);\n  opponentField = (0,_generateRandomField__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(shipTypes, opponentShips);\n  console.log(playerField);\n  console.log(opponentField);\n  (0,_printField__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(playerField, 'playerField', true, 'player');\n  (0,_printField__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(opponentField, 'opponentField', false, 'player2');\n}\n\ngameStart();\n\n//# sourceURL=webpack://sea-battle/./src/js/main.js?");

/***/ }),

/***/ "./src/js/printField.js":
/*!******************************!*\
  !*** ./src/js/printField.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ printField)\n/* harmony export */ });\nfunction printField(field, tableId, show, user) {\n  let table = document.getElementById(tableId);\n\n  for (let i = 0; i < 10; i++) {\n    let row = table.insertRow(-1);\n    let th = document.createElement('th');\n    th.innerHTML = i + 1;\n    row.appendChild(th);\n\n    for (let j = 0; j < 10; j++) {\n      let cell = row.insertCell(-1);\n      cell.id = user + '-' + i + '-' + j;\n\n      if (show === true) {\n        if (field[i][j] == 1) {\n          cell.className = 'ship';\n        } else {\n          cell.innerHTML = '<a></a>';\n        }\n      } else {\n        if (field[i][j] == 2) {\n          cell.className = 'miss';\n        } else {\n          cell.innerHTML = `<a class=\"cell\" href=\"#\"> </a>`;\n        }\n      }\n    }\n  }\n}\n\n//# sourceURL=webpack://sea-battle/./src/js/printField.js?");

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://sea-battle/./src/css/main.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;