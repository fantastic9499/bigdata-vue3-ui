"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("./style/index.css");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "YfButton"
  },
  __name: "index",
  props: {
    type: {}
  },
  setup(__props) {
    const props = __props;
    const buttonStyle = vue.computed(() => {
      return { [`yf-button--${props.type}`]: props.type };
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("button", {
        class: vue.normalizeClass(["yf-button", buttonStyle.value])
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
exports.default = _sfc_main;
