(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/App/Component.js":
/*!******************************!*\
  !*** ./src/App/Component.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (class {\n  constructor(hostElementId, insertBefore = false) {\n    if (hostElementId) {\n      this.hostElement = document.getElementById(hostElementId);\n    } else {\n      this.hostElement = document.body;\n    }\n    this.insertBefore = insertBefore;\n  }\n\n  detach() {\n    if (this.element) {\n      this.element.remove();\n      // this.element.parentElement.removeChild(this.element);\n    }\n  }\n\n  attach() {\n    this.hostElement.insertAdjacentElement(\n      this.insertBefore ? \"afterbegin\" : \"beforeend\",\n      this.element\n    );\n  }\n});\n\n\n//# sourceURL=webpack:///./src/App/Component.js?");

/***/ }),

/***/ "./src/App/Tooltip.js":
/*!****************************!*\
  !*** ./src/App/Tooltip.js ***!
  \****************************/
/*! exports provided: Tooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tooltip\", function() { return Tooltip; });\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ \"./src/App/Component.js\");\n\n\nconsole.log(\"Tooltip running\");\n\nclass Tooltip extends _Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(closeNotifierFunction, text, hostElementId) {\n    super(hostElementId);\n    this.closeNotifier = closeNotifierFunction;\n    this.text = text;\n    this.closeTooltip = () => {\n      this.detach();\n      this.closeNotifier();\n    };\n    this.create();\n  }\n\n  create() {\n    const tooltipElement = document.createElement(\"div\");\n    tooltipElement.className = \"card\";\n    const tooltipTemplate = document.getElementById(\"tooltip\");\n    const tooltipBody = document.importNode(tooltipTemplate.content, true);\n    tooltipBody.querySelector(\"p\").textContent = this.text;\n    tooltipElement.append(tooltipBody);\n\n    const hostElPosLeft = this.hostElement.offsetLeft;\n    const hostElPosTop = this.hostElement.offsetTop;\n    const hostElHeight = this.hostElement.clientHeight;\n    const parentElementScrolling = this.hostElement.parentElement.scrollTop;\n\n    const xOffset = 20;\n    const yOffset = 10;\n\n    const x = hostElPosLeft + xOffset;\n    const y = hostElPosTop + hostElHeight - parentElementScrolling - yOffset;\n\n    tooltipElement.style.position = \"absolute\";\n    tooltipElement.style.left = x + \"px\";\n    tooltipElement.style.top = y + \"px\";\n\n    tooltipElement.addEventListener(\"click\", this.closeTooltip);\n    this.element = tooltipElement;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/App/Tooltip.js?");

/***/ })

}]);