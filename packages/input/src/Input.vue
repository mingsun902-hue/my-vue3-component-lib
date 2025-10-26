<template>
  <div 
    :class="inputKls"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <input 
      :value="modelValue"
      @input="onInput" 
      :placeholder="placeholder"
      :class="['xx-input__inner']" 
      @focus="isFocused = true"
      @blur="isFocused = false"
    >
    <span 
      v-if="showClear" 
      @click="onClear"
      class="xx-input__clear"
      @mousedown.prevent
    >x</span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { inputProps } from './types';
import { useBem } from '@my-org/utils';

defineOptions({
  name: 'Input'
})
const props = defineProps(inputProps)
const emit = defineEmits(['update:modelValue'])

const {b, m, is} = useBem('input')

const inputKls = computed(() => [
  b(),
  m(props.size),
  is('disabled', props.disabled)
])

const hovering = ref(false)
const isFocused = ref(false)
const handleMouseEnter = () => (hovering.value = true)
const handleMouseLeave = () => (hovering.value = false)

const showClear = computed(() =>
  props.clearable && 
  (!props.disabled) && 
  (isFocused.value || hovering.value)
)

function onInput(e: Event) {
  const val = (e.target as HTMLInputElement).value
  emit('update:modelValue', val)
}

const onClear = () => {
  emit('update:modelValue', '')
}
</script>

<style scoped>
</style>