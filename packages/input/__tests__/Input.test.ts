import Input from "../src/index";
import { mount } from '@vue/test-utils'
import { describe, it, expect } from "vitest";

describe('Input.vue', () => {
  it (('渲染测试'), () => {
    const wrapper = mount(Input)
    expect(wrapper.find('input').exists()).toBe(true)
  })
  it (('根据 size 渲染正确 class'), () => {
    const wrapper = mount(Input, {
      props: { size: 'large' }
    })
    expect(wrapper.classes()).toContain('xx-input--large')
  })
  it (('测试 update:modelValue 是否能正确触发'), async() => {
    const wrapper = mount(Input, {
      props: { modelValue: '' }
    })
    const input = wrapper.find('input')

    await input.setValue('hello')

    // 断言事件是否被触发
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual(['hello'])
  })

  it('测试清除按钮的显示与点击行为', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: 'abc',
        clearable: true
      }
    })

    // 模拟鼠标悬浮
    await wrapper.trigger('mouseenter')

    const clear = wrapper.find('.xx-input__clear')
    expect(clear.exists()).toBe(true)

    await clear.trigger('mousedown') // 防止 blur
    await clear.trigger('click')

    // 清除应触发事件
    expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([''])
  })
})