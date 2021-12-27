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

/***/ "./src/js/checkAliveShips.js":
/*!***********************************!*\
  !*** ./src/js/checkAliveShips.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkAliveShips)\n/* harmony export */ });\nfunction checkAliveShips(userShips) {\n  if (userShips.length > 1) return true;\n  return false;\n}\n\n//# sourceURL=webpack://sea-battle/./src/js/checkAliveShips.js?");

/***/ }),

/***/ "./src/js/checkGameStatus.js":
/*!***********************************!*\
  !*** ./src/js/checkGameStatus.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkGameStatus)\n/* harmony export */ });\n/* harmony import */ var _checkAliveShips__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkAliveShips */ \"./src/js/checkAliveShips.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ \"./src/js/main.js\");\n\n\nfunction checkGameStatus() {\n  if (!(0,_checkAliveShips__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_main__WEBPACK_IMPORTED_MODULE_1__.playerShips)) {\n    alert(_main__WEBPACK_IMPORTED_MODULE_1__.username2 + ' победил!');\n    (0,_main__WEBPACK_IMPORTED_MODULE_1__.gameEnd)();\n    return true;\n  }\n\n  if (!(0,_checkAliveShips__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_main__WEBPACK_IMPORTED_MODULE_1__.opponentShips)) {\n    alert(_main__WEBPACK_IMPORTED_MODULE_1__.username1 + ' победил!');\n    (0,_main__WEBPACK_IMPORTED_MODULE_1__.gameEnd)();\n    return true;\n  }\n}\n\n//# sourceURL=webpack://sea-battle/./src/js/checkGameStatus.js?");

/***/ }),

/***/ "./src/js/checkShipPlace.js":
/*!**********************************!*\
  !*** ./src/js/checkShipPlace.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkShipPlace)\n/* harmony export */ });\nfunction checkShipPlace(field, x, y, direction, length) {\n  let minX, maxX, minY, maxY;\n\n  if (direction === 'vertical') {\n    if (x + length - 1 > 9) return false;\n    minX = x === 0 ? 0 : x - 1;\n    maxX = x + length > 9 ? 9 : x + length;\n    minY = y === 0 ? 0 : y - 1;\n    maxY = y + 1 > 9 ? 9 : y + 1;\n  }\n\n  if (direction === 'horizontal') {\n    if (y + length - 1 > 9) return false;\n    minX = x === 0 ? 0 : x - 1;\n    maxX = x + 1 > 9 ? 9 : x + 1;\n    minY = y === 0 ? 0 : y - 1;\n    maxY = y + length > 9 ? 9 : y + length;\n  }\n\n  for (let i = minX; i <= maxX; i++) {\n    for (let j = minY; j <= maxY; j++) {\n      if (field[i][j] === 1) return false;\n    }\n  }\n\n  return true;\n}\n\n//# sourceURL=webpack://sea-battle/./src/js/checkShipPlace.js?");

/***/ }),

/***/ "./src/js/checkWhenShipHitted.js":
/*!***************************************!*\
  !*** ./src/js/checkWhenShipHitted.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkWhenShipHitted)\n/* harmony export */ });\nfunction checkWhenShipHitted(userShips, x, y) {\n  let searchCell = JSON.stringify([x, y, 0]);\n\n  for (let i = 1; i < userShips.length; i++) {\n    for (let j = 0; j < userShips[i].length; j++) {\n      let temp = JSON.stringify(userShips[i][j]);\n\n      if (temp == searchCell) {\n        userShips[i][j][2] = 1;\n        return i;\n      }\n    }\n  }\n}\n\n//# sourceURL=webpack://sea-battle/./src/js/checkWhenShipHitted.js?");

/***/ }),

/***/ "./src/js/clearField.js":
/*!******************************!*\
  !*** ./src/js/clearField.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clearField)\n/* harmony export */ });\nfunction clearField() {\n  for (let rowNumber = 9; rowNumber >= 0; rowNumber--) {\n    document.getElementById(\"playerField\").deleteRow(-1);\n    document.getElementById(\"opponentField\").deleteRow(-1);\n  }\n}\n\n//# sourceURL=webpack://sea-battle/./src/js/clearField.js?");

/***/ }),

/***/ "./src/js/fieldClick.js":
/*!******************************!*\
  !*** ./src/js/fieldClick.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fieldClick)\n/* harmony export */ });\n/* harmony import */ var _printField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printField */ \"./src/js/printField.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ \"./src/js/main.js\");\n/* harmony import */ var _checkWhenShipHitted__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkWhenShipHitted */ \"./src/js/checkWhenShipHitted.js\");\n/* harmony import */ var _isSunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isSunk */ \"./src/js/isSunk.js\");\n/* harmony import */ var _markSunkShip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./markSunkShip */ \"./src/js/markSunkShip.js\");\n/* harmony import */ var _checkGameStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkGameStatus */ \"./src/js/checkGameStatus.js\");\n/* harmony import */ var _clearField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clearField */ \"./src/js/clearField.js\");\n\n\n\n\n\n\n\nfunction fieldClick(elem, x, y, user) {\n  let style;\n  let opField, opShips;\n\n  if (user.substring(1, user.length - 1) == 'player2') {\n    opField = _main__WEBPACK_IMPORTED_MODULE_1__.opponentField;\n    opShips = _main__WEBPACK_IMPORTED_MODULE_1__.opponentShips;\n  } else {\n    opField = _main__WEBPACK_IMPORTED_MODULE_1__.playerField;\n    opShips = _main__WEBPACK_IMPORTED_MODULE_1__.playerShips;\n  }\n\n  if (opField[x][y] === 1) {\n    style = 'hit';\n    opField[x][y] = 3;\n    let shipID = (0,_checkWhenShipHitted__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(opShips, x, y);\n\n    if ((0,_isSunk__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(opShips, shipID, opField)) {\n      (0,_markSunkShip__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(opShips, shipID, user, opField);\n    }\n\n    (0,_checkGameStatus__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  } else if (opField[x][y] === 0) {\n    style = 'miss';\n    opField[x][y] = 2;\n    (0,_checkGameStatus__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    _main__WEBPACK_IMPORTED_MODULE_1__.layout.classList.add(\"layout-visible\");\n    _main__WEBPACK_IMPORTED_MODULE_1__.changePlayerBtn.addEventListener('click', () => {\n      (0,_clearField__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n\n      if (opField == _main__WEBPACK_IMPORTED_MODULE_1__.opponentField) {\n        (0,_printField__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_main__WEBPACK_IMPORTED_MODULE_1__.opponentField, 'playerField', true, 'player2');\n        (0,_printField__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_main__WEBPACK_IMPORTED_MODULE_1__.playerField, 'opponentField', false, 'player');\n        _main__WEBPACK_IMPORTED_MODULE_1__.username1Place.innerHTML = _main__WEBPACK_IMPORTED_MODULE_1__.username2;\n        _main__WEBPACK_IMPORTED_MODULE_1__.username2Place.innerHTML = _main__WEBPACK_IMPORTED_MODULE_1__.username1;\n      } else {\n        (0,_printField__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_main__WEBPACK_IMPORTED_MODULE_1__.playerField, 'playerField', true, 'player');\n        (0,_printField__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_main__WEBPACK_IMPORTED_MODULE_1__.opponentField, 'opponentField', false, 'player2');\n        _main__WEBPACK_IMPORTED_MODULE_1__.username1Place.innerHTML = _main__WEBPACK_IMPORTED_MODULE_1__.username1;\n        _main__WEBPACK_IMPORTED_MODULE_1__.username2Place.innerHTML = _main__WEBPACK_IMPORTED_MODULE_1__.username2;\n      }\n\n      _main__WEBPACK_IMPORTED_MODULE_1__.layout.classList.remove(\"layout-visible\");\n    });\n  }\n\n  elem.parentNode.className = style;\n  elem.parentNode.removeChild(elem);\n}\n\n//# sourceURL=webpack://sea-battle/./src/js/fieldClick.js?");

/***/ }),

/***/ "./src/js/generateRandomField.js":
/*!***************************************!*\
  !*** ./src/js/generateRandomField.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generateRandomField)\n/* harmony export */ });\n/* harmony import */ var _getMatrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getMatrix */ \"./src/js/getMatrix.js\");\n/* harmony import */ var _getRandom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getRandom */ \"./src/js/getRandom.js\");\n/* harmony import */ var _checkShipPlace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkShipPlace */ \"./src/js/checkShipPlace.js\");\n\n\n\nfunction generateRandomField(ships, userShips) {\n  let possibleCoord = 0;\n  let field = (0,_getMatrix__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  let x, y;\n  let direction;\n  let shipCounter = 0;\n\n  for (let i = 0; i < 4; i++) {\n    let shipLength = ships[i][1];\n    let shipAmmount = ships[i][2];\n\n    for (let j = 0; j < shipAmmount; j++) {\n      possibleCoord = 0;\n      shipCounter++;\n      userShips[shipCounter] = [];\n\n      while (possibleCoord === 0) {\n        direction = (0,_getRandom__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(1) ? 'vertical' : 'horizontal';\n        x = (0,_getRandom__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(9);\n        y = (0,_getRandom__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(9);\n\n        if (direction === 'vertical') {\n          if ((0,_checkShipPlace__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(field, x, y, direction, shipLength)) {\n            for (let k = 0; k < shipLength; k++) {\n              field[x + k][y] = 1;\n              userShips[shipCounter].push([x + k, y, 0]);\n            }\n\n            possibleCoord = 1;\n          }\n        }\n\n        if (direction === 'horizontal') {\n          if ((0,_checkShipPlace__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(field, x, y, direction, shipLength)) {\n            for (let l = 0; l < shipLength; l++) {\n              field[x][y + l] = 1;\n              userShips[shipCounter].push([x, y + l, 0]);\n            }\n\n            possibleCoord = 1;\n          }\n        }\n      }\n    }\n  }\n\n  return field;\n}\n\n//# sourceURL=webpack://sea-battle/./src/js/generateRandomField.js?");

/***/ }),

/***/ "./src/js/getMatrix.js":
/*!*****************************!*\
  !*** ./src/js/getMatrix.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getMatrix)\n/* harmony export */ });\nfunction getMatrix() {\n  let x = 10,\n      y = 10;\n  let matrix = [];\n\n  for (let i = 0; i < x; i++) {\n    matrix[i] = [];\n\n    for (let j = 0; j < 10; j++) {\n      matrix[i][j] = 0;\n    }\n  }\n\n  return matrix;\n}\n\n//# sourceURL=webpack://sea-battle/./src/js/getMatrix.js?");

/***/ }),

/***/ "./src/js/getRandom.js":
/*!*****************************!*\
  !*** ./src/js/getRandom.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getRandom)\n/* harmony export */ });\nfunction getRandom(n) {\n  return Math.floor(Math.random() * (n + 1));\n}\n\n//# sourceURL=webpack://sea-battle/./src/js/getRandom.js?");

/***/ }),

/***/ "./src/js/isSunk.js":
/*!**************************!*\
  !*** ./src/js/isSunk.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isSunk)\n/* harmony export */ });\nfunction isSunk(userShips, shipID) {\n  for (let i = 0; i < userShips[shipID].length; i++) {\n    if (userShips[shipID][i][2] === 0) {\n      return false;\n    }\n  }\n\n  return true;\n}\n\n//# sourceURL=webpack://sea-battle/./src/js/isSunk.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"username1\": () => (/* binding */ username1),\n/* harmony export */   \"username2\": () => (/* binding */ username2),\n/* harmony export */   \"username1Place\": () => (/* binding */ username1Place),\n/* harmony export */   \"username2Place\": () => (/* binding */ username2Place),\n/* harmony export */   \"layout\": () => (/* binding */ layout),\n/* harmony export */   \"changePlayerBtn\": () => (/* binding */ changePlayerBtn),\n/* harmony export */   \"shipTypes\": () => (/* binding */ shipTypes),\n/* harmony export */   \"playerField\": () => (/* binding */ playerField),\n/* harmony export */   \"opponentField\": () => (/* binding */ opponentField),\n/* harmony export */   \"playerShips\": () => (/* binding */ playerShips),\n/* harmony export */   \"opponentShips\": () => (/* binding */ opponentShips),\n/* harmony export */   \"gameEnd\": () => (/* binding */ gameEnd)\n/* harmony export */ });\n/* harmony import */ var _generateRandomField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateRandomField */ \"./src/js/generateRandomField.js\");\n/* harmony import */ var _printField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./printField */ \"./src/js/printField.js\");\n/* harmony import */ var _fieldClick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fieldClick */ \"./src/js/fieldClick.js\");\n\n\n\nconst username1 = 'Player1';\nconst username2 = 'Player2';\nconst username1Place = document.getElementById('player1-place');\nconst username2Place = document.getElementById('player2-place');\nconst layout = document.getElementById('layout');\nconst changePlayerBtn = document.getElementById('change_player');\nconst shipTypes = [['Линкор', 4, 1], ['Крейсер', 3, 2], ['Эсминец', 2, 3], ['Катер', 1, 4]];\nlet playerField = [];\nlet opponentField = [];\nlet playerShips = [];\nlet opponentShips = [];\n\nfunction gameStart() {\n  username1Place.innerHTML = username1;\n  username2Place.innerHTML = username2;\n  playerField = (0,_generateRandomField__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(shipTypes, playerShips);\n  opponentField = (0,_generateRandomField__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(shipTypes, opponentShips);\n  (0,_printField__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(playerField, 'playerField', true, 'player');\n  (0,_printField__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(opponentField, 'opponentField', false, 'player2');\n}\n\nfunction gameEnd() {\n  return true;\n}\ngameStart();\n\n//# sourceURL=webpack://sea-battle/./src/js/main.js?");

/***/ }),

/***/ "./src/js/markSunkShip.js":
/*!********************************!*\
  !*** ./src/js/markSunkShip.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ markSunkShip)\n/* harmony export */ });\nfunction markSunkShip(userShips, shipID, user, field) {\n  let cell;\n  let minX, maxX, minY, maxY;\n\n  for (let i = 0; i < userShips[shipID].length; i++) {\n    let x = userShips[shipID][i][0],\n        y = userShips[shipID][i][1];\n    minX = x === 0 ? 0 : x - 1;\n    maxX = x + 1 > 9 ? 9 : x + 1;\n    minY = y === 0 ? 0 : y - 1;\n    maxY = y + 1 > 9 ? 9 : y + 1;\n\n    for (let k = minX; k <= maxX; k++) {\n      for (let l = minY; l <= maxY; l++) {\n        if (field[k][l] === 0) {\n          field[k][l] = 2;\n          cell = document.getElementById(`${user.substring(1, user.length - 1)}-${k}-${l}`);\n          cell.className = 'miss';\n          cell.removeChild(cell.firstChild);\n          if (user === 'player2') cell.removeChild(cell.firstChild);\n        }\n      }\n    }\n  }\n\n  userShips.splice(shipID, 1);\n}\n\n//# sourceURL=webpack://sea-battle/./src/js/markSunkShip.js?");

/***/ }),

/***/ "./src/js/printField.js":
/*!******************************!*\
  !*** ./src/js/printField.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ printField)\n/* harmony export */ });\n/* harmony import */ var _fieldClick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fieldClick */ \"./src/js/fieldClick.js\");\n\nfunction printField(field, tableId, show, user) {\n  let table = document.getElementById(tableId);\n\n  for (let i = 0; i < 10; i++) {\n    let row = table.insertRow(-1);\n    let th = document.createElement('th');\n    th.innerHTML = i + 1;\n    row.appendChild(th);\n\n    for (let j = 0; j < 10; j++) {\n      let cell = row.insertCell(-1);\n      cell.id = user + '-' + i + '-' + j;\n\n      if (show === true) {\n        if (field[i][j] == 1) {\n          cell.className = 'ship';\n        } else if (field[i][j] == 2) {\n          cell.className = 'miss';\n        } else if (field[i][j] == 3) {\n          cell.className = 'hit';\n        } else {\n          cell.innerHTML = '<a></a>';\n        }\n      } else {\n        if (field[i][j] == 2) {\n          cell.className = 'miss';\n        } else if (field[i][j] == 3) {\n          cell.className = 'hit';\n        } else {\n          cell.innerHTML = `<a class=\"cell\" href=\"#\"> </a>`;\n          cell.addEventListener('click', e => {\n            (0,_fieldClick__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e.target, i, j, `'${user}'`);\n          });\n        }\n      }\n    }\n  }\n}\n\n//# sourceURL=webpack://sea-battle/./src/js/printField.js?");

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