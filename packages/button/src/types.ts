import type { PropType } from 'vue'
import { buildProps } from '@my-org/utils'

const buttonTypes = ['primary', 'success', 'warning', 'danger'] as const
const buttonSize = ['small', 'medium', 'large'] as const

// 对象式声明
export const buttonProps = buildProps({
  type: {
    type: String as PropType<(typeof buttonTypes)[number]>,
    default: 'primary',
    values: buttonTypes
  },
  size: {
    type: String as PropType<(typeof buttonSize)[number]>,
    default: 'medium',
    values: buttonSize
  },
  disabled: Boolean,
  loading: Boolean,
  circle: Boolean,
  round: Boolean
} as const)
