import { PropType } from "vue";
import { buildProps } from "@my-org/utils";

const sizeTypes = ['small', 'medium', 'large'] as const

export const inputProps = buildProps({
  modelValue: String,
  size: {
    type: String as PropType<(typeof sizeTypes)[number]>,
    values: sizeTypes,
    default: 'medium' 
  },
  placeholder: String,
  disabled: Boolean,
  clearable: Boolean,
} as const)
