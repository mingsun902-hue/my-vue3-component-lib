import { defineComponent as u, ref as l, onMounted as d, createElementBlock as m, openBlock as g, normalizeStyle as v, normalizeClass as h, toDisplayString as y, createVNode as C, render as i } from "vue";
const _ = /* @__PURE__ */ u({
  name: "Message",
  __name: "Message",
  props: {
    message: {},
    type: {},
    duration: {},
    promise: {},
    onClose: { type: Function }
  },
  setup(e, { expose: t }) {
    const s = l(0), o = l(0), n = l(null);
    function p(r) {
      s.value = r;
    }
    t({
      setOffset: p,
      height: o
    });
    const c = e;
    return d(() => {
      c.duration !== 0 && setTimeout(() => {
        c.onClose?.();
      }, c.duration || 3e3), n.value && (o.value = n.value.offsetHeight);
    }), (r, M) => (g(), m("div", {
      ref_key: "el",
      ref: n,
      class: h(["message", e.type]),
      style: v({ top: `${s.value}px` })
    }, y(e.message), 7));
  }
}), x = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [o, n] of t)
    s[o] = n;
  return s;
}, O = /* @__PURE__ */ x(_, [["__scopeId", "data-v-a0911131"]]), a = [];
function b(e) {
  const t = document.createElement("div");
  document.body.appendChild(t);
  const o = C(O, {
    ...e,
    onClose: () => {
      i(null, t), document.body.removeChild(t), a.splice(a.indexOf(o), 1), f(), e.onClose?.();
    }
  });
  i(o, t), a.push(o), f(), e.promise && e.promise.then((n) => {
    Object.assign(o.component.props, n);
  });
}
function f() {
  let e = 20;
  a.forEach((t) => {
    t.component?.exposed?.setOffset(e), e += (t.component?.exposed?.height.value || 0) + 10;
  });
}
export {
  b as default
};
