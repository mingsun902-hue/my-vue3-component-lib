import type { Meta, StoryObj } from '@storybook/vue3'
import { createMessage } from '../src/createMessage'
import { h } from 'vue'

const meta: Meta = {
  title: 'Components/Message',
  parameters: {
    docs: {
      description: {
        component: `
Message 是一个全局提示组件，通过函数调用的方式展示不同类型的消息。

支持类型：
- success
- error
- info
- warning
- loading
        `
      }
    }
  }
}
export default meta

export const Basic: StoryObj = {
  render: () => ({
    setup() {
      const openMessage = (type: any) => {
        createMessage({
          message: `这是一条 ${type} 消息`,
          type
        })
      }
      return () =>
        h('div', { style: 'display: flex; gap: 12px;' }, [
          h('button', { onClick: () => openMessage('success') }, 'Success'),
          h('button', { onClick: () => openMessage('error') }, 'Error'),
          h('button', { onClick: () => openMessage('info') }, 'Info'),
          h('button', { onClick: () => openMessage('warning') }, 'Warning'),
          h('button', { onClick: () => openMessage('loading') }, 'Loading')
        ])
    }
  })
}

export const WithPromise: StoryObj = {
  render: () => ({
    setup() {
      const runAsync = () => {
        const fakeRequest: any = new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              message: '请求成功 ✅',
              type: 'success'
            })
          }, 2000)
        })

        createMessage({
          message: '请求中...',
          type: 'loading',
          promise: fakeRequest
        })
      }

      return () =>
        h('button', { onClick: runAsync }, '触发异步消息')
    }
  }),
  parameters: {
    docs: {
      description: {
        story: `
此示例展示了 Message 与 Promise 的绑定机制：  
点击按钮后显示 “请求中...”，2 秒后自动更新为 “请求成功 ✅”。
        `
      }
    }
  }
}
