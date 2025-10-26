import { buildProps as e } from "../../utils/dist/esm/index.js";
const o = ["primary", "success", "warning", "danger"], t = ["small", "medium", "large"], n = e({
  type: {
    type: String,
    default: "primary",
    values: o
  },
  size: {
    type: String,
    default: "medium",
    values: t
  },
  disabled: Boolean,
  loading: Boolean,
  circle: Boolean,
  round: Boolean
});
export {
  n as buttonProps
};
