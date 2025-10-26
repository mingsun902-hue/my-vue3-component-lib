<template>
  <button :class="buttonKls">
    <slot> </slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { buttonProps } from './types'
import { useBem } from '@my-org/utils'
defineOptions({
  name: 'Button'
})
// 对象声明
const { type, size, disabled, circle, round, loading } =
  defineProps(buttonProps)
const { b, m, is } = useBem('button')

const buttonKls = computed(() => {
  return [
    b(),
    m(type),
    m(size),
    is('disabled', disabled),
    is('circle', circle),
    is('round', round),
    is('loading', loading)
  ]
})
</script>
