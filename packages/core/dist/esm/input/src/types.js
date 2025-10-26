import { buildProps as e } from "../../utils/dist/esm/index.js";
const l = ["small", "medium", "large"], a = e({
  modelValue: String,
  size: {
    type: String,
    values: l,
    default: "medium"
  },
  placeholder: String,
  disabled: Boolean,
  clearable: Boolean
});
export {
  a as inputProps
};
