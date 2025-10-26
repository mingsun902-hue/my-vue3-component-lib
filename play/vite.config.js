import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@my-org/button': path.resolve(__dirname, '../packages/button'),
      '@my-org/utils': path.resolve(__dirname, '../packages/utils'),
      '@my-org/core': path.resolve(__dirname, '../packages/core'),
      '@my-org/input': path.resolve(__dirname, '../packages/input'),
      '@my-org/message': path.resolve(__dirname, '../packages/message'),
      '@my-org/dialog': path.resolve(__dirname, '../packages/dialog')
    },
  },
})
