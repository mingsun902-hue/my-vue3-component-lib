import { defineComponent as x, computed as s, ref as u, createElementBlock as r, openBlock as i, normalizeClass as d, createElementVNode as I, createCommentVNode as k, withModifiers as z } from "vue";
import { buildProps as _, useBem as w } from "@my-org/utils";
const y = ["small", "medium", "large"], E = _({
  modelValue: String,
  size: {
    type: String,
    values: y,
    default: "medium"
  },
  placeholder: String,
  disabled: Boolean,
  clearable: Boolean
}), S = ["value", "placeholder"], F = /* @__PURE__ */ x({
  name: "Input",
  __name: "Input",
  props: E,
  emits: ["update:modelValue"],
  setup(p, { emit: m }) {
    const l = p, a = m, { b: c, m: v, is: f } = w("input"), b = s(() => [
      c(),
      v(l.size),
      f("disabled", l.disabled)
    ]), o = u(!1), t = u(!1), V = () => o.value = !0, g = () => o.value = !1, B = s(
      () => l.clearable && !l.disabled && (t.value || o.value)
    );
    function C(n) {
      const e = n.target.value;
      a("update:modelValue", e);
    }
    const M = () => {
      a("update:modelValue", "");
    };
    return (n, e) => (i(), r("div", {
      class: d(b.value),
      onMouseenter: V,
      onMouseleave: g
    }, [
      I("input", {
        value: n.modelValue,
        onInput: C,
        placeholder: n.placeholder,
        class: d(["xx-input__inner"]),
        onFocus: e[0] || (e[0] = (h) => t.value = !0),
        onBlur: e[1] || (e[1] = (h) => t.value = !1)
      }, null, 40, S),
      B.value ? (i(), r("span", {
        key: 0,
        onClick: M,
        class: "xx-input__clear",
        onMousedown: e[2] || (e[2] = z(() => {
        }, ["prevent"]))
      }, "x", 32)) : k("", !0)
    ], 34));
  }
});
F.name = "Input";
export {
  F as Input,
  F as default
};
