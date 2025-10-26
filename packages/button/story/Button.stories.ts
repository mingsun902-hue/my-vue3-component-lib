import Button from '../src' // 支持 index.ts 默认导出组件

export default {
  title: 'Components/Button',  // 在左侧目录显示路径
  component: Button,

  // 👉 控制面板（Controls）配置
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'danger'],
      description: '按钮类型',
      table: { defaultValue: { summary: 'default' } },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '按钮尺寸',
      table: { defaultValue: { summary: 'medium' } },
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用按钮',
    },
    onClick: { action: 'clicked' }, // 捕获事件
  },

  // 👉 文档说明（Docs 插件会显示这里的说明）
  parameters: {
    docs: {
      description: {
        component: `
**Button 按钮组件**

用于触发一个操作事件。支持不同尺寸、颜色和状态。
        `,
      },
    },
  },
}

// ===============================
// ✅ 各种故事示例（Stories）
// ===============================

// 基本用法
export const Primary = {
  args: {
    type: 'primary',
    size: 'medium',
  },
  render: (args: any) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: `<Button v-bind="args">主要按钮</Button>`,
  }),
}

// 禁用状态
export const Disabled = {
  args: {
    type: 'primary',
    disabled: true,
  },
  render: (args: any) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: `<Button v-bind="args">禁用按钮</Button>`,
  }),
}

// 不同类型
export const Types = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display:flex;gap:10px;">
        <Button type="primary">Primary</Button>
        <Button type="success">Success</Button>
        <Button type="warning">Warning</Button>
        <Button type="danger">Danger</Button>
      </div>
    `,
  }),
}

// 不同尺寸
export const Sizes = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display:flex;gap:10px;align-items:center;">
        <Button size="small" type="primary">Small</Button>
        <Button size="medium" type="primary">Medium</Button>
        <Button size="large" type="primary">Large</Button>
      </div>
    `,
  }),
}
