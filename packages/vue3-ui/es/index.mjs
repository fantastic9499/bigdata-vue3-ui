import * as index$1 from "./src/index.mjs";
import { Button } from "./src/button/index.mjs";
const index = {
  install: (app) => {
    Object.values(index$1).forEach((component) => {
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
export {
  Button,
  index as default
};
