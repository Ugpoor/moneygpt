"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/generate";
exports.ids = ["pages/api/generate"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/generate.js":
/*!*******************************!*\
  !*** ./pages/api/generate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    if (!configuration.apiKey) {\n        res.status(500).json({\n            error: {\n                message: \"OpenAI API key not configured, please follow instructions in README.md\"\n            }\n        });\n        return;\n    }\n    const animal = req.body.animal || \"\";\n    if (animal.trim().length === 0) {\n        res.status(400).json({\n            error: {\n                message: \"大哥/妹子，写个靠谱的特性\"\n            }\n        });\n        return;\n    }\n    try {\n        const completion = await openai.createCompletion({\n            model: \"text-davinci-003\",\n            prompt: generatePrompt(animal),\n            temperature: 0.6\n        });\n        res.status(200).json({\n            result: completion.data.choices[0].text\n        });\n    } catch (error) {\n        // Consider adjusting the error handling logic for your use case\n        if (error.response) {\n            console.error(error.response.status, error.response.data);\n            res.status(error.response.status).json(error.response.data);\n        } else {\n            console.error(`Error with OpenAI API request: ${error.message}`);\n            res.status(500).json({\n                error: {\n                    message: \"An error occurred during your request.\"\n                }\n            });\n        }\n    }\n}\nfunction generatePrompt(animal) {\n    const capitalizedAnimal = animal[0].toUpperCase() + animal.slice(1).toLowerCase();\n    return `Suggest three names for an animal that is a superhero.\n\nAnimal: Cat\nNames: Captain Sharpclaw, Agent Fluffball, The Incredible Feline\nAnimal: Dog\nNames: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot\nAnimal: ${capitalizedAnimal}\nNames:`;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWxELE1BQU1FLGdCQUFnQixJQUFJRixpREFBYUEsQ0FBQztJQUN0Q0csUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBQ3BDO0FBQ0EsTUFBTUMsU0FBUyxJQUFJTiw2Q0FBU0EsQ0FBQ0M7QUFFN0IsNkJBQWUsMENBQWdCTSxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN2QyxJQUFJLENBQUNQLGNBQWNDLE1BQU0sRUFBRTtRQUN6Qk0sSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUNuQkMsT0FBTztnQkFDTEMsU0FBUztZQUNYO1FBQ0Y7UUFDQTtJQUNGLENBQUM7SUFFRCxNQUFNQyxTQUFTTixJQUFJTyxJQUFJLENBQUNELE1BQU0sSUFBSTtJQUNsQyxJQUFJQSxPQUFPRSxJQUFJLEdBQUdDLE1BQU0sS0FBSyxHQUFHO1FBQzlCUixJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQ25CQyxPQUFPO2dCQUNMQyxTQUFTO1lBQ1g7UUFDRjtRQUNBO0lBQ0YsQ0FBQztJQUVELElBQUk7UUFDRixNQUFNSyxhQUFhLE1BQU1YLE9BQU9ZLGdCQUFnQixDQUFDO1lBQy9DQyxPQUFPO1lBQ1BDLFFBQVFDLGVBQWVSO1lBQ3ZCUyxhQUFhO1FBQ2Y7UUFDQWQsSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFYSxRQUFRTixXQUFXTyxJQUFJLENBQUNDLE9BQU8sQ0FBQyxFQUFFLENBQUNDLElBQUk7UUFBQztJQUNqRSxFQUFFLE9BQU1mLE9BQU87UUFDYixnRUFBZ0U7UUFDaEUsSUFBSUEsTUFBTWdCLFFBQVEsRUFBRTtZQUNsQkMsUUFBUWpCLEtBQUssQ0FBQ0EsTUFBTWdCLFFBQVEsQ0FBQ2xCLE1BQU0sRUFBRUUsTUFBTWdCLFFBQVEsQ0FBQ0gsSUFBSTtZQUN4RGhCLElBQUlDLE1BQU0sQ0FBQ0UsTUFBTWdCLFFBQVEsQ0FBQ2xCLE1BQU0sRUFBRUMsSUFBSSxDQUFDQyxNQUFNZ0IsUUFBUSxDQUFDSCxJQUFJO1FBQzVELE9BQU87WUFDTEksUUFBUWpCLEtBQUssQ0FBQyxDQUFDLCtCQUErQixFQUFFQSxNQUFNQyxPQUFPLENBQUMsQ0FBQztZQUMvREosSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFDbkJDLE9BQU87b0JBQ0xDLFNBQVM7Z0JBQ1g7WUFDRjtRQUNGLENBQUM7SUFDSDtBQUNGLENBQUM7QUFFRCxTQUFTUyxlQUFlUixNQUFNLEVBQUU7SUFDOUIsTUFBTWdCLG9CQUNKaEIsTUFBTSxDQUFDLEVBQUUsQ0FBQ2lCLFdBQVcsS0FBS2pCLE9BQU9rQixLQUFLLENBQUMsR0FBR0MsV0FBVztJQUN2RCxPQUFPLENBQUM7Ozs7OztRQU1GLEVBQUVILGtCQUFrQjtNQUN0QixDQUFDO0FBQ1AiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcGVuYWktcXVpY2tzdGFydC1ub2RlLy4vcGFnZXMvYXBpL2dlbmVyYXRlLmpzPzYyN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgT3BlbkFJQXBpIH0gZnJvbSBcIm9wZW5haVwiO1xuXG5jb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oe1xuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxufSk7XG5jb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJQXBpKGNvbmZpZ3VyYXRpb24pO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgaWYgKCFjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgIGVycm9yOiB7XG4gICAgICAgIG1lc3NhZ2U6IFwiT3BlbkFJIEFQSSBrZXkgbm90IGNvbmZpZ3VyZWQsIHBsZWFzZSBmb2xsb3cgaW5zdHJ1Y3Rpb25zIGluIFJFQURNRS5tZFwiLFxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGFuaW1hbCA9IHJlcS5ib2R5LmFuaW1hbCB8fCAnJztcbiAgaWYgKGFuaW1hbC50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe1xuICAgICAgZXJyb3I6IHtcbiAgICAgICAgbWVzc2FnZTogXCLlpKflk6Uv5aa55a2Q77yM5YaZ5Liq6Z2g6LCx55qE54m55oCnXCIsXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBjb21wbGV0aW9uID0gYXdhaXQgb3BlbmFpLmNyZWF0ZUNvbXBsZXRpb24oe1xuICAgICAgbW9kZWw6IFwidGV4dC1kYXZpbmNpLTAwM1wiLFxuICAgICAgcHJvbXB0OiBnZW5lcmF0ZVByb21wdChhbmltYWwpLFxuICAgICAgdGVtcGVyYXR1cmU6IDAuNixcbiAgICB9KTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHJlc3VsdDogY29tcGxldGlvbi5kYXRhLmNob2ljZXNbMF0udGV4dCB9KTtcbiAgfSBjYXRjaChlcnJvcikge1xuICAgIC8vIENvbnNpZGVyIGFkanVzdGluZyB0aGUgZXJyb3IgaGFuZGxpbmcgbG9naWMgZm9yIHlvdXIgdXNlIGNhc2VcbiAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IucmVzcG9uc2Uuc3RhdHVzLCBlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICAgIHJlcy5zdGF0dXMoZXJyb3IucmVzcG9uc2Uuc3RhdHVzKS5qc29uKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aXRoIE9wZW5BSSBBUEkgcmVxdWVzdDogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgIG1lc3NhZ2U6ICdBbiBlcnJvciBvY2N1cnJlZCBkdXJpbmcgeW91ciByZXF1ZXN0LicsXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVByb21wdChhbmltYWwpIHtcbiAgY29uc3QgY2FwaXRhbGl6ZWRBbmltYWwgPVxuICAgIGFuaW1hbFswXS50b1VwcGVyQ2FzZSgpICsgYW5pbWFsLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiBgU3VnZ2VzdCB0aHJlZSBuYW1lcyBmb3IgYW4gYW5pbWFsIHRoYXQgaXMgYSBzdXBlcmhlcm8uXG5cbkFuaW1hbDogQ2F0XG5OYW1lczogQ2FwdGFpbiBTaGFycGNsYXcsIEFnZW50IEZsdWZmYmFsbCwgVGhlIEluY3JlZGlibGUgRmVsaW5lXG5BbmltYWw6IERvZ1xuTmFtZXM6IFJ1ZmYgdGhlIFByb3RlY3RvciwgV29uZGVyIENhbmluZSwgU2lyIEJhcmtzLWEtTG90XG5BbmltYWw6ICR7Y2FwaXRhbGl6ZWRBbmltYWx9XG5OYW1lczpgO1xufVxuIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJPcGVuQUlBcGkiLCJjb25maWd1cmF0aW9uIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk9QRU5BSV9BUElfS0VZIiwib3BlbmFpIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwibWVzc2FnZSIsImFuaW1hbCIsImJvZHkiLCJ0cmltIiwibGVuZ3RoIiwiY29tcGxldGlvbiIsImNyZWF0ZUNvbXBsZXRpb24iLCJtb2RlbCIsInByb21wdCIsImdlbmVyYXRlUHJvbXB0IiwidGVtcGVyYXR1cmUiLCJyZXN1bHQiLCJkYXRhIiwiY2hvaWNlcyIsInRleHQiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJjYXBpdGFsaXplZEFuaW1hbCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ0b0xvd2VyQ2FzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/generate.js"));
module.exports = __webpack_exports__;

})();