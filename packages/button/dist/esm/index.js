import { defineComponent as r, computed as s, createElementBlock as i, openBlock as d, normalizeClass as m, renderSlot as c, createTextVNode as b } from "vue";
import { buildProps as B, useBem as f } from "@my-org/utils";
const g = ["primary", "success", "warning", "danger"], p = ["small", "medium", "large"], y = B({
  type: {
    type: String,
    default: "primary",
    values: g
  },
  size: {
    type: String,
    default: "medium",
    values: p
  },
  disabled: Boolean,
  loading: Boolean,
  circle: Boolean,
  round: Boolean
}), z = /* @__PURE__ */ r({
  name: "Button",
  __name: "Button",
  props: y,
  setup(e) {
    const { b: a, m: n, is: t } = f("button"), l = s(() => [
      a(),
      n(e.type),
      n(e.size),
      t("disabled", e.disabled),
      t("circle", e.circle),
      t("round", e.round),
      t("loading", e.loading)
    ]);
    return (u, o) => (d(), i("button", {
      class: m(l.value)
    }, [
      c(u.$slots, "default", {}, () => [
        o[0] || (o[0] = b("爱你哟++Fack", -1))
      ])
    ], 2));
  }
});
z.name = "Button";
export {
  z as Button,
  z as default
};
