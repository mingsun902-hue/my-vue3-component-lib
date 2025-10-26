// .storybook/main.js
import vue from '@vitejs/plugin-vue'

export default {
  stories: ['../packages/**/*.stories.@(js|ts|vue)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  viteFinal: async (config) => {
    // ✅ 确保 Vue 插件启用
    config.plugins = config.plugins || []
    config.plugins.push(vue())
    return config
  },
  docs: {
    autodocs: true, // ✅ 自动生成 Docs 页
  },
}
