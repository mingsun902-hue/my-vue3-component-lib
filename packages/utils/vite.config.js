import { defineConfig } from 'vite'
import path from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      include: ['src'],
      entryRoot: 'src',
      outputDir: 'dist'
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'Utils', // 仅用于 UMD
      fileName: 'index'
    },
    rollupOptions: {
      external: ['vue', '@my-org/utils'],
      output: [
        // ESM 输出
        {
          format: 'es',
          dir: 'dist/esm',
          entryFileNames: '[name].js',
          exports: 'named',
          globals: { vue: 'Vue' }
        },
        // CJS 输出
        {
          format: 'cjs',
          dir: 'dist/lib',
          entryFileNames: '[name].js',
          exports: 'named',
          globals: { vue: 'Vue' }
        },
        // UMD 输出
        {
          format: 'umd',
          dir: 'dist/umd',
          entryFileNames: 'my-ui.umd.js',
          name: 'Utils',
          globals: { vue: 'Vue' },
          exports: 'named'
        }
      ]
    }
  }
})
