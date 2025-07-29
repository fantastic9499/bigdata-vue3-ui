"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const index$2 = require("./src/index.js");
const index$1 = require("./src/button/index.js");
const index = {
  install: (app) => {
    Object.values(index$2).forEach((component) => {
      if (component.install) {
        app.use(component);
      }
    });
  }
  // install: (app: App) => {
  // 	for (let c in components) {
  // 		app.use(components[c]);
  // 	}
  // },
};
exports.Button = index$1.Button;
exports.default = index;
