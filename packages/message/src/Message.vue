<template>
  <div ref="el" :class="['message', type]" :style="{ top: `${offset}px` }">
    {{ message }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { MessageOptions } from './types';
import { onMounted } from 'vue';
defineOptions({
  name: 'Message'
})

const offset = ref(0)
const height = ref(0)
const el = ref<HTMLElement | null>(null)

function setOffset(val: number) {
  offset.value = val;
}

defineExpose({
  setOffset,
  height
})

const props = defineProps<
  MessageOptions
>()

// 定时销毁组件
onMounted(()=>{
  if (props.duration !== 0) {
    setTimeout(() => {
      props.onClose?.();
    }, props.duration || 3000);
  }
  if (el.value) {
    height.value = el.value.offsetHeight
  }
})
</script>

<style scoped>
</style>

<style scoped>
.message {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  padding: 12px 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  border-radius: 4px;
  z-index: 9999;
  transition: all 0.3s ease-in-out;
}
.message.success { background: #f0f9eb; color: #67c23a; }
.message.error { background: #fef0f0; color: #f56c6c; }
.message.info { background: #f4f4f5; color: #909399; }
.message.warning { background: #fdf6ec; color: #e6a23c; }
.message.loading { background: #ecf5ff; color: #409eff; }
</style>