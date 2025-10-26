import { defineComponent as u, computed as s, createElementBlock as r, openBlock as i, normalizeClass as d, renderSlot as c } from "vue";
import { buildProps as m, useBem as b } from "@my-org/utils";
const B = ["primary", "success", "warning", "danger"], f = ["small", "medium", "large"], g = m({
  type: {
    type: String,
    default: "primary",
    values: B
  },
  size: {
    type: String,
    default: "medium",
    values: f
  },
  disabled: Boolean,
  loading: Boolean,
  circle: Boolean,
  round: Boolean
}), p = /* @__PURE__ */ u({
  name: "Button",
  __name: "Button",
  props: g,
  setup(e) {
    const { b: o, m: n, is: t } = b("button"), a = s(() => [
      o(),
      n(e.type),
      n(e.size),
      t("disabled", e.disabled),
      t("circle", e.circle),
      t("round", e.round),
      t("loading", e.loading)
    ]);
    return (l, y) => (i(), r("button", {
      class: d(a.value)
    }, [
      c(l.$slots, "default")
    ], 2));
  }
});
p.name = "Button";
export {
  p as Button,
  p as default
};
