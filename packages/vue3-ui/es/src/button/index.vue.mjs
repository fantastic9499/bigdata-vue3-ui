import { defineComponent, computed, createElementBlock, openBlock, normalizeClass, renderSlot } from "vue";
import "./style/index.css";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "YfButton"
  },
  __name: "index",
  props: {
    type: {}
  },
  setup(__props) {
    const props = __props;
    const buttonStyle = computed(() => {
      return { [`yf-button--${props.type}`]: props.type };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["yf-button", buttonStyle.value])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
