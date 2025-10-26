import { defineComponent as b, ref as w, watch as m, onMounted as v, onBeforeUnmount as B, createBlock as S, openBlock as i, Teleport as V, createVNode as x, Transition as E, withCtx as T, createElementBlock as y, createCommentVNode as k, withModifiers as M, createElementVNode as t, normalizeStyle as N, renderSlot as c, toDisplayString as d, createTextVNode as O } from "vue";
const $ = { class: "dialog-header" }, z = { class: "dialog-title" }, D = { class: "dialog-body" }, L = { class: "dialog-footer" }, F = /* @__PURE__ */ b({
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
  setup(l, { emit: h }) {
    const o = l, a = h, s = w(o.modelValue);
    m(() => o.modelValue, (e) => s.value = e);
    function n() {
      o.beforeClose ? o.beforeClose(r) : r();
    }
    function r() {
      s.value = !1, a("update:modelValue", !1), a("close");
    }
    function C() {
      a("confirm"), n();
    }
    function g() {
      a("cancel"), n();
    }
    function p() {
      o.closeOnClickMask && n();
    }
    function u(e) {
      e.key === "Escape" && o.closeOnPressEscape && n();
    }
    return v(() => document.addEventListener("keydown", u)), B(() => document.removeEventListener("keydown", u)), m(s, (e) => {
      o.lockScroll && (document.body.style.overflow = e ? "hidden" : "");
    }), (e, f) => (i(), S(V, { to: "body" }, [
      x(E, { name: "dialog-fade" }, {
        default: T(() => [
          s.value ? (i(), y("div", {
            key: 0,
            class: "dialog-overlay",
            onClick: M(p, ["self"])
          }, [
            t("div", {
              class: "dialog",
              style: N({ width: l.width }),
              role: "dialog",
              "aria-modal": "true"
            }, [
              t("header", $, [
                c(e.$slots, "header", {}, () => [
                  t("span", z, d(l.title), 1)
                ]),
                l.showClose ? (i(), y("button", {
                  key: 0,
                  class: "dialog-close",
                  onClick: n
                }, "×")) : k("", !0)
              ]),
              t("section", D, [
                c(e.$slots, "default", {}, () => [
                  f[0] || (f[0] = O("默认内容", -1))
                ])
              ]),
              t("footer", L, [
                c(e.$slots, "footer", {}, () => [
                  t("button", {
                    class: "dialog-btn cancel",
                    onClick: g
                  }, d(l.cancelText), 1),
                  t("button", {
                    class: "dialog-btn confirm",
                    onClick: C
                  }, d(l.confirmText), 1)
                ])
              ])
            ], 4)
          ])) : k("", !0)
        ]),
        _: 3
      })
    ]));
  }
});
export {
  F as default
};
