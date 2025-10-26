// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import prettier from 'eslint-config-prettier'

export default [
  // 忽略文件 (取代 .eslintignore)
  {
    ignores: ['dist', 'node_modules'],
  },

  // 核心配置
  {
    files: ['**/*.{ts,js,vue}'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      vue: pluginVue,
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      // ✅ JavaScript 推荐规则
      ...js.configs.recommended.rules,

      // ✅ Vue3 推荐规则（ESLint 9 兼容写法）
      ...(pluginVue.configs['vue3-essential']?.rules ?? {}),

      // ✅ TypeScript 推荐规则（兼容空对象）
      ...(tsPlugin.configs.recommended?.rules ?? {}),

      // ✅ 自定义规则
      'no-unused-vars': 'warn',
      'vue/multi-word-component-names': 'off',
    },
  },

  // ✅ Prettier 兼容配置
  prettier,
]
