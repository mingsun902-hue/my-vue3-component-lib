import { defineComponent as B, computed as a, ref as u, createElementBlock as r, openBlock as i, normalizeClass as p, createElementVNode as _, createCommentVNode as w, withModifiers as E } from "vue";
import { inputProps as I } from "./types.js";
import { useBem as g } from "../../utils/dist/esm/index.js";
const z = ["value", "placeholder"], y = /* @__PURE__ */ B({
  name: "Input",
  __name: "Input",
  props: I,
  emits: ["update:modelValue"],
  setup(d, { emit: m }) {
    const o = d, s = m, { b: c, m: v, is: f } = g("input"), C = a(() => [
      c(),
      v(o.size),
      f("disabled", o.disabled)
    ]), l = u(!1), t = u(!1), M = () => l.value = !0, V = () => l.value = !1, b = a(
      () => o.clearable && !o.disabled && (t.value || l.value)
    );
    function x(n) {
      const e = n.target.value;
      s("update:modelValue", e);
    }
    const h = () => {
      s("update:modelValue", "");
    };
    return (n, e) => (i(), r("div", {
      class: p(C.value),
      onMouseenter: M,
      onMouseleave: V
    }, [
      _("input", {
        value: n.modelValue,
        onInput: x,
        placeholder: n.placeholder,
        class: p(["xx-input__inner"]),
        onFocus: e[0] || (e[0] = (k) => t.value = !0),
        onBlur: e[1] || (e[1] = (k) => t.value = !1)
      }, null, 40, z),
      b.value ? (i(), r("span", {
        key: 0,
        onClick: h,
        class: "xx-input__clear",
        onMousedown: e[2] || (e[2] = E(() => {
        }, ["prevent"]))
      }, "x", 32)) : w("", !0)
    ], 34));
  }
});
export {
  y as default
};
