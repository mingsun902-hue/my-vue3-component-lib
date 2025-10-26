import Input from '../src/index'

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    modelValue: {
      control: 'text',
      description: '输入框内容'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '输入框尺寸',
    },
    placeholder: {
      control: 'text',
      description: '输入框占位提示',
      table: { defaultValue: { summary: '请输入内容' } },
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用输入框',
      table: { defaultValue: { summary: false } },
    },
    clearable: {
      control: 'boolean',
      description: '是否显示清除按钮',
      table: { defaultValue: { summary: false } },
    },
  },
}

export const Primary = {
  render: (args: any) => ({
    components: { Input },
    setup() {
      return { args }
    },
    template: `
      <Input v-model="args.modelValue" v-bind="args" />
    `,
  }),
  args: {
    modelValue: '',
    placeholder: '请输入内容',
    clearable: true,
  },
}

export const Sizes = {
  render: () => ({
    components: { Input },
    template: `
      <div style="display:flex; gap:10px;">
        <Input size="large" placeholder="Large"/>
        <Input size="medium" placeholder="Medium" />
        <Input size="small" placeholder="Small" />
      </div>
    `,
  }),
}
