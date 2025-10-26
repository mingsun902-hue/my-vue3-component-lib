import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import path from 'path'

// 🔥 核心逻辑：同时输出 esm、lib、umd
export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: ['src/index.ts'],
      outputDir: 'dist/types',
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'MyUI',
      fileName: 'index', // 默认输出 index.js
    },
    rollupOptions: {
      external: ['vue'],
      output: [
        {
          format: 'es',
          dir: 'dist/esm',
          entryFileNames: '[name].js',
          exports: 'named',
          preserveModules: true,
          preserveModulesRoot: 'src',
          globals: { vue: 'Vue' }
        },
        {
          format: 'cjs',
          dir: 'dist/lib',
          entryFileNames: '[name].js',
          exports: 'named',
          preserveModules: true,
          preserveModulesRoot: 'src'
        },
        {
          format: 'umd',
          dir: 'dist',
          entryFileNames: 'my-ui.umd.js',
          name: 'MyUI',
          exports: 'named',
          globals: {
            vue: 'Vue',
            '@my-org/button': 'Button',
            '@my-org/input': 'Input',
            '@my-org/message': 'Message',
            '@my-org/dialog': 'Dialog',
          }
        }
      ]
    }
  },
})
