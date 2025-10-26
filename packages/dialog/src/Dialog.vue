<template>
  <teleport to="body">
    <transition name="dialog-fade">
      <div
        v-if="visible"
        class="dialog-overlay"
        @click.self="handleMaskClick"
      >
        <div
          class="dialog"
          :style="{ width }"
          role="dialog"
          aria-modal="true"
        >
          <header class="dialog-header">
            <slot name="header">
              <span class="dialog-title">{{ title }}</span>
            </slot>
            <button v-if="showClose" class="dialog-close" @click="close">×</button>
          </header>

          <section class="dialog-body">
            <slot>默认内容</slot>
          </section>

          <footer class="dialog-footer">
            <slot name="footer">
              <button class="dialog-btn cancel" @click="handleCancel">{{ cancelText }}</button>
              <button class="dialog-btn confirm" @click="handleConfirm">{{ confirmText }}</button>
            </slot>
          </footer>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  modelValue: Boolean,
  title: { type: String, default: '提示' },
  width: { type: String, default: '400px' },
  showClose: { type: Boolean, default: true },
  confirmText: { type: String, default: '确定' },
  cancelText: { type: String, default: '取消' },
  closeOnClickMask: { type: Boolean, default: true },
  closeOnPressEscape: { type: Boolean, default: true },
  beforeClose: Function,
  zIndex: Number,
  lockScroll: { type: Boolean, default: true }
})

const emit = defineEmits(['update:modelValue', 'close', 'confirm', 'cancel'])

const visible = ref(props.modelValue)

watch(() => props.modelValue, val => (visible.value = val))

function close() {
  if (props.beforeClose) props.beforeClose(doClose)
  else doClose()
}

function doClose() {
  visible.value = false
  emit('update:modelValue', false)
  emit('close')
}

function handleConfirm() {
  emit('confirm')
  close()
}

function handleCancel() {
  emit('cancel')
  close()
}

function handleMaskClick() {
  if (props.closeOnClickMask) close()
}

// ESC 键关闭
function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && props.closeOnPressEscape) close()
}

onMounted(() => document.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => document.removeEventListener('keydown', onKeydown))

// 锁定滚动
watch(visible, (val) => {
  if (props.lockScroll) document.body.style.overflow = val ? 'hidden' : ''
})
</script>
