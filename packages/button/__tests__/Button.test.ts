import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Button from '../src/index'

describe('Button.vue', () => {
  it('渲染默认插槽文字', () => {
    const wrapper = mount(Button, {
      slots: {
        default: '提交'
      }
    })
    expect(wrapper.text()).toBe('提交')
  })

  it('根据 type 渲染正确 class', () => {
    const wrapper = mount(Button, {
      props: { type: 'primary' }
    })
    expect(wrapper.classes()).toContain('xx-button--primary')
  })

  it('根据 size 渲染正确 class', () => {
    const wrapper = mount(Button, {
      props: { size: 'large' }
    })
    expect(wrapper.classes()).toContain('xx-button--large')
  })

  it('disabled 为 true 时，包含 is-disabled 类', () => {
    const wrapper = mount(Button, {
      props: { disabled: true }
    })
    expect(wrapper.classes()).toContain('is-disabled')
  })

  it('loading 状态时，包含 is-loading 类', () => {
    const wrapper = mount(Button, {
      props: { loading: true }
    })
    expect(wrapper.classes()).toContain('is-loading')
  })

  it('circle 和 round 同时存在时，类名都应该存在', () => {
    const wrapper = mount(Button, {
      props: { circle: true, round: true }
    })
    expect(wrapper.classes()).toContain('is-circle')
    expect(wrapper.classes()).toContain('is-round')
  })
})
