import { defineComponent as w, ref as V, watch as y, onMounted as B, onBeforeUnmount as S, createBlock as E, openBlock as d, Teleport as x, createVNode as p, Transition as T, withCtx as D, createElementBlock as C, createCommentVNode as g, withModifiers as M, createElementVNode as n, normalizeStyle as N, renderSlot as r, toDisplayString as u, createTextVNode as O, render as k } from "vue";
const P = { class: "dialog-header" }, $ = { class: "dialog-title" }, z = { class: "dialog-body" }, L = { class: "dialog-footer" }, U = /* @__PURE__ */ w({
  __name: "Dialog",
  props: {
    modelValue: Boolean,
    title: { type: String, default: "提示" },
    width: { type: String, default: "400px" },
    showClose: { type: Boolean, default: !0 },
    confirmText: { type: String, default: "确定" },
    cancelText: { type: String, default: "取消" },
    closeOnClickMask: { type: Boolean, default: !0 },
    closeOnPressEscape: { type: Boolean, default: !0 },
    beforeClose: Function,
    zIndex: Number,
    lockScroll: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "close", "confirm", "cancel"],
  setup(l, { emit: a }) {
    const e = l, c = a, i = V(e.modelValue);
    y(() => e.modelValue, (t) => i.value = t);
    function o() {
      e.beforeClose ? e.beforeClose(s) : s();
    }
    function s() {
      i.value = !1, c("update:modelValue", !1), c("close");
    }
    function h() {
      c("confirm"), o();
    }
    function b() {
      c("cancel"), o();
    }
    function v() {
      e.closeOnClickMask && o();
    }
    function f(t) {
      t.key === "Escape" && e.closeOnPressEscape && o();
    }
    return B(() => document.addEventListener("keydown", f)), S(() => document.removeEventListener("keydown", f)), y(i, (t) => {
      e.lockScroll && (document.body.style.overflow = t ? "hidden" : "");
    }), (t, m) => (d(), E(x, { to: "body" }, [
      p(T, { name: "dialog-fade" }, {
        default: D(() => [
          i.value ? (d(), C("div", {
            key: 0,
            class: "dialog-overlay",
            onClick: M(v, ["self"])
          }, [
            n("div", {
              class: "dialog",
              style: N({ width: l.width }),
              role: "dialog",
              "aria-modal": "true"
            }, [
              n("header", P, [
                r(t.$slots, "header", {}, () => [
                  n("span", $, u(l.title), 1)
                ]),
                l.showClose ? (d(), C("button", {
                  key: 0,
                  class: "dialog-close",
                  onClick: o
                }, "×")) : g("", !0)
              ]),
              n("section", z, [
                r(t.$slots, "default", {}, () => [
                  m[0] || (m[0] = O("默认内容", -1))
                ])
              ]),
              n("footer", L, [
                r(t.$slots, "footer", {}, () => [
                  n("button", {
                    class: "dialog-btn cancel",
                    onClick: b
                  }, u(l.cancelText), 1),
                  n("button", {
                    class: "dialog-btn confirm",
                    onClick: h
                  }, u(l.confirmText), 1)
                ])
              ])
            ], 4)
          ])) : g("", !0)
        ]),
        _: 3
      })
    ]));
  }
});
function F(l) {
  const a = document.createElement("div");
  return document.body.appendChild(a), new Promise((e, c) => {
    const i = p(U, {
      ...l,
      modelValue: !0,
      onConfirm: () => {
        e(!0), o();
      },
      onCancel: () => {
        c(!1), o();
      },
      "onUpdate:modelValue": (s) => {
        s || o();
      }
    });
    function o() {
      k(null, a), a.remove();
    }
    k(i, a);
  });
}
const K = F;
export {
  K as CreateDialog,
  U as Dialog,
  F as createDialog,
  U as default
};
