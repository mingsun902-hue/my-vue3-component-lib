import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import path from 'path'

export default defineConfig({
  plugins: [vue(), dts({ include: ['src'] })],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'Button',
      fileName: 'index'
    },
    rollupOptions: {
      external: ['vue', '@my-org/utils'],
      output: [
        { format: 'es', dir: 'dist/esm', entryFileNames: '[name].js', exports: 'named' },
        { format: 'cjs', dir: 'dist/lib', entryFileNames: '[name].js', exports: 'named' }
      ]
    }
  },
  // ✅ 添加 Vitest 测试配置
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['__tests__/**/*.test.ts'], // 可选，指定测试目录
    coverage: {
      coverage: {
        provider: 'v8',
        reporter: ['text', 'html'],
        include: ['src/**/*.vue', 'src/**/*.ts'],
        exclude: [],
        reportsDirectory: './__tests__/coverage'
      }
    }
  },
})
