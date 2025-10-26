import "./button/src/index.js";
import "./input/src/index.js";
import { createMessage as g } from "./message/src/createMessage.js";
import { CreateDialog as u } from "./dialog/src/index.js";
import a from "./button/src/Button.vue.js";
import e from "./input/src/Input.vue.js";
import m from "./dialog/src/Dialog.vue.js";
const r = [a, e, m], c = {
  install(t) {
    r.forEach((o) => t.component(o.name, o));
  }
};
export {
  a as Button,
  u as CreateDialog,
  m as Dialog,
  e as Input,
  g as Message,
  c as default
};
