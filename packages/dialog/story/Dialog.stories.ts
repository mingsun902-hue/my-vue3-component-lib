import type { Meta, StoryObj } from '@storybook/vue3'
import Dialog from '../src'
import { ref } from 'vue'

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    docs: {
      description: {
        component: `
Dialog（对话框）用于展示模态窗口信息或操作确认。
支持 \`v-model\` 控制显隐、点击遮罩关闭、ESC 键关闭、自定义插槽、以及函数式调用。
        `,
      },
    },
  },
}
export default meta
type Story = StoryObj<typeof Dialog>

export const Basic: Story = {
  render: () => ({
    components: { Dialog },
    setup() {
      const visible = ref(false)
      const open = () => (visible.value = true)
      return { visible, open }
    },
    template: `
      <button @click="open">打开 Dialog</button>
      <Dialog v-model="visible" title="提示">
        <p>这是一个基础弹窗示例。</p>
      </Dialog>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: `
**基础使用**  
使用 \`v-model\` 控制 Dialog 显示与隐藏。  
可通过 \`title\` 属性设置标题，默认提供确认与取消按钮。`,
      },
    },
  },
}

export const CustomSlots: Story = {
  render: () => ({
    components: { Dialog },
    setup() {
      const show = ref(false)
      return { show }
    },
    template: `
      <button @click="show = true">自定义插槽 Dialog</button>
      <Dialog v-model="show">
        <template #header>
          <h3 style="margin:0; color:#409EFF;">自定义标题 🎨</h3>
        </template>
        <p>这里是自定义内容，可插入任意组件。</p>
        <template #footer>
          <button style="padding:6px 12px; margin-right:8px;" @click="show=false">关闭</button>
          <button style="background:#409eff;color:white;padding:6px 12px;" @click="show=false">确认</button>
        </template>
      </Dialog>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: `
**插槽使用**  
Dialog 提供三个插槽：  
- \`#header\`：自定义头部标题内容  
- 默认插槽：内容主体  
- \`#footer\`：底部操作按钮`,
      },
    },
  },
}

export const CloseBehavior: Story = {
  render: () => ({
    components: { Dialog },
    setup() {
      const visible = ref(false)
      const open = () => (visible.value = true)
      return { visible, open }
    },
    template: `
      <button @click="open">打开 Dialog（禁止遮罩关闭）</button>
      <Dialog
        v-model="visible"
        title="安全提示"
        :closeOnClickMask="false"
        :closeOnPressEscape="false"
      >
        <p>此弹窗无法通过点击遮罩或按下 ESC 关闭。</p>
      </Dialog>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: `
**关闭行为控制**  
通过 \`closeOnClickMask\` 和 \`closeOnPressEscape\` 属性可控制关闭方式。  
默认情况下点击遮罩或按 ESC 会关闭弹窗。`,
      },
    },
  },
}

export const BeforeClose: Story = {
  render: () => ({
    components: { Dialog },
    setup() {
      const visible = ref(false)
      const open = () => (visible.value = true)

      const beforeClose = (done: () => void) => {
        if (confirm('确定要关闭吗？')) done()
      }

      return { visible, open, beforeClose }
    },
    template: `
      <button @click="open">打开 Dialog（异步关闭）</button>
      <Dialog
        v-model="visible"
        title="操作确认"
        :beforeClose="beforeClose"
      >
        <p>关闭前会弹出确认框。</p>
      </Dialog>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: `
**异步关闭（beforeClose）**  
在关闭前执行自定义逻辑，支持异步判断。  
示例中通过原生 \`confirm\` 弹窗确认是否关闭。`,
      },
    },
  },
}
