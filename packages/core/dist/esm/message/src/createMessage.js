import r from "./Message.vue.js";
import { createVNode as p, render as s } from "vue";
const t = [];
function a(e) {
  const o = document.createElement("div");
  document.body.appendChild(o);
  const n = p(r, {
    ...e,
    onClose: () => {
      s(null, o), document.body.removeChild(o), t.splice(t.indexOf(n), 1), c(), e.onClose?.();
    }
  });
  s(n, o), t.push(n), c(), e.promise && e.promise.then((d) => {
    Object.assign(n.component.props, d);
  });
}
function c() {
  let e = 20;
  t.forEach((o) => {
    o.component?.exposed?.setOffset(e), e += (o.component?.exposed?.height.value || 0) + 10;
  });
}
export {
  a as createMessage
};
