import { createVNode as d, render as o } from "vue";
import i from "./Dialog.vue.js";
function f(r) {
  const e = document.createElement("div");
  return document.body.appendChild(e), new Promise((t, a) => {
    const c = d(i, {
      ...r,
      modelValue: !0,
      onConfirm: () => {
        t(!0), n();
      },
      onCancel: () => {
        a(!1), n();
      },
      "onUpdate:modelValue": (m) => {
        m || n();
      }
    });
    function n() {
      o(null, e), e.remove();
    }
    o(c, e);
  });
}
export {
  f as createDialog
};
