/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\nconst userInput = document.querySelector('.searchbar')\nconst inputBtn = document.querySelector('button')\n\nconst weatherInformation = (() => {\n\n    const getWeather = (city) => {fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=da147e72e31a188c11a8c46352094705`, {mode: 'cors'})\n.then((res) => {\n    return res.json()\n})\n.then((data) => {\n    let lat = data[0].lat\n    let lon = data[0].lon\n    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=da147e72e31a188c11a8c46352094705&units=metric`, {mode: 'cors'})\n    .then((res) => {\n        return res.json()\n    })\n    .then((data) => {\n        const cityName = document.querySelector('.city')\n        if (data.name === 'Downtown Toronto') {\n            cityName.innerText = 'Toronto'\n        } else {\n            cityName.innerText = data.name\n        }\n        const temperature = document.querySelector('.temp')\n        temperature.innerText = `${data.main.temp}℃`\n        const feelsLike = document.querySelector('.feels-like')\n        feelsLike.innerText = `Feels Like: ${data.main.feels_like}℃`\n        const humidity = document.querySelector('.humidity')\n        humidity.innerText = `Humidity: ${data.main.humidity}%`\n        const windSpeed = document.querySelector('.wind')\n        windSpeed.innerText = `Wind: ${data.wind.speed}km/h`\n    })\n})}\n\n\n\nreturn {getWeather}\n\n})()\n\n\n\n\ninputBtn.addEventListener('click', (e) => {\n    weatherInformation.getWeather(userInput.value)\n})\n\nwindow.addEventListener('load', (e) => {\n    weatherInformation.getWeather('Hamilton')\n})\n\n\n\n\n//# sourceURL=webpack://api-test/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;