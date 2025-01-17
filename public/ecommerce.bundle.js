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

/***/ "./src/js/ecommerce.js":
/*!*****************************!*\
  !*** ./src/js/ecommerce.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! algoliasearch/lite */ \"./node_modules/algoliasearch/dist/algoliasearch-lite.umd.js\");\n/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(algoliasearch_lite__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var instantsearch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! instantsearch.js */ \"./node_modules/instantsearch.js/es/index.js\");\n/* harmony import */ var instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! instantsearch.js/es/widgets */ \"./node_modules/instantsearch.js/es/widgets/search-box/search-box.js\");\n/* harmony import */ var instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! instantsearch.js/es/widgets */ \"./node_modules/instantsearch.js/es/widgets/hits/hits.js\");\n/* harmony import */ var instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! instantsearch.js/es/widgets */ \"./node_modules/instantsearch.js/es/widgets/pagination/pagination.js\");\n/* harmony import */ var instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! instantsearch.js/es/widgets */ \"./node_modules/instantsearch.js/es/widgets/numeric-menu/numeric-menu.js\");\n/* harmony import */ var instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! instantsearch.js/es/widgets */ \"./node_modules/instantsearch.js/es/widgets/refinement-list/refinement-list.js\");\n/** Algolia JS **/\n\n/** InstantsearchJS */\n\n\n/** InstantsearchJS Widgets */\n\n\nvar searchClient = algoliasearch_lite__WEBPACK_IMPORTED_MODULE_0___default()('O966BSY3LD', '6db67900bfa16b4173055f87526117a7');\nvar search = (0,instantsearch_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n  indexName: 'kenafrica_ecommerce',\n  searchClient: searchClient\n});\nsearch.addWidgets([(0,instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n  container: '#ecommerce',\n  placeholder: 'Search for products',\n  autofocus: true\n}), (0,instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n  container: '#hits',\n  templates: {\n    item: \"\\n            <article>\\n                <h1>{{#helpers.highlight}}{ \\\"attribute\\\": \\\"item-name\\\" }{{/helpers.highlight}}</h1>\\n            </article\"\n  }\n}), (0,instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n  container: '#pagination'\n}), (0,instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n  container: '#numeric-menu',\n  attribute: 'price',\n  items: [{\n    label: 'All'\n  }, {\n    label: 'Less than 50$',\n    end: 50\n  }, {\n    label: 'Between 50$ - 75$',\n    start: 50,\n    end: 75\n  }, {\n    label: 'More than 75$',\n    start: 75\n  }]\n}), (0,instantsearch_js_es_widgets__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n  container: '#refinement-list',\n  attribute: 'category',\n  sortBy: ['count:desc', 'name:asc']\n})]);\nsearch.start();\n\n//# sourceURL=webpack://algolia-instantsearch-demo/./src/js/ecommerce.js?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"ecommerce": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkalgolia_instantsearch_demo"] = self["webpackChunkalgolia_instantsearch_demo"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_algoliasearch_dist_algoliasearch-lite_umd_js-node_modules_instantsearch_-995e30","vendors-node_modules_instantsearch_js_es_widgets_refinement-list_refinement-list_js","vendors-node_modules_instantsearch_js_es_widgets_pagination_pagination_js","vendors-node_modules_instantsearch_js_es_widgets_numeric-menu_numeric-menu_js"], () => (__webpack_require__("./src/js/ecommerce.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;