import { defineComponent as u, ref as s, onMounted as f, createElementBlock as c, openBlock as m, normalizeStyle as p, normalizeClass as g, toDisplayString as d } from "vue";
const h = /* @__PURE__ */ u({
  name: "Message",
  __name: "Message",
  props: {
    message: {},
    type: {},
    duration: {},
    promise: {},
    onClose: { type: Function }
  },
  setup(e, { expose: i }) {
    const n = s(0), a = s(0), t = s(null);
    function r(l) {
      n.value = l;
    }
    i({
      setOffset: r,
      height: a
    });
    const o = e;
    return f(() => {
      o.duration !== 0 && setTimeout(() => {
        o.onClose?.();
      }, o.duration || 3e3), t.value && (a.value = t.value.offsetHeight);
    }), (l, y) => (m(), c("div", {
      ref_key: "el",
      ref: t,
      class: g(["message", e.type]),
      style: p({ top: `${n.value}px` })
    }, d(e.message), 7));
  }
});
export {
  h as default
};
