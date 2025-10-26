<template>
  <Button type="primary" @click="dialogVisiable = true">Open</Button>

  <Dialog 
    v-model="dialogVisiable"
    title="Title"
    @cancel="console.log('取消')"
    :closeOnClickMask="false"
  >
    <span>This is a dialog.</span>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@my-org/core'
import '@my-org/core/dist/index.css'
import Dialog from '@my-org/dialog/src';

const dialogVisiable = ref(false)
</script>

<style scoped>
</style>