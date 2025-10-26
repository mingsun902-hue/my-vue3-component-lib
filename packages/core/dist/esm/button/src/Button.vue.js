import { defineComponent as a, computed as u, createElementBlock as s, openBlock as c, normalizeClass as m, renderSlot as i } from "vue";
import { buttonProps as d } from "./types.js";
import { useBem as b } from "../../utils/dist/esm/index.js";
const p = /* @__PURE__ */ a({
  name: "Button",
  __name: "Button",
  props: d,
  setup(t) {
    const { b: n, m: o, is: e } = b("button"), l = u(() => [
      n(),
      o(t.type),
      o(t.size),
      e("disabled", t.disabled),
      e("circle", t.circle),
      e("round", t.round),
      e("loading", t.loading)
    ]);
    return (r, f) => (c(), s("button", {
      class: m(l.value)
    }, [
      i(r.$slots, "default")
    ], 2));
  }
});
export {
  p as default
};
