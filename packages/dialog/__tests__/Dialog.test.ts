import { describe, it, expect, vi, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import Dialog from '../src/index'

afterEach(() => {
  document.body.innerHTML = '' // 清理 Teleport 节点
})

describe('Dialog Component', () => {
  // ✅ 1️⃣ 基础显隐控制
  it('should render dialog when v-model is true', async () => {
    const wrapper = mount(Dialog, {
      props: { modelValue: true }
    })
    await nextTick()
    expect(document.querySelector('.dialog-overlay')).toBeTruthy()
  })

  it('should not render when v-model is false', async () => {
    const wrapper = mount(Dialog, {
      props: { modelValue: false }
    })
    await nextTick()
    expect(document.querySelector('.dialog-overlay')).toBeNull()
  })

  // ✅ 2️⃣ 点击遮罩关闭
  it('should close when click on overlay', async () => {
    const wrapper = mount(Dialog, {
      props: { modelValue: true }
    })
    await nextTick()

    const overlay = document.querySelector('.dialog-overlay') as HTMLElement
    overlay.click()
    await nextTick()

    // 等待事件同步
    expect(wrapper.emitted()['update:modelValue']?.[0]).toEqual([false])
  })

  // ✅ 3️⃣ 禁止点击遮罩关闭
  it('should not close when closeOnClickMask is false', async () => {
    const wrapper = mount(Dialog, {
      props: { modelValue: true, closeOnClickMask: false }
    })
    await nextTick()

    const overlay = document.querySelector('.dialog-overlay') as HTMLElement
    overlay.click()
    await nextTick()

    expect(wrapper.emitted()['update:modelValue']).toBeUndefined()
  })

  // ✅ 4️⃣ 点击确认与取消按钮
  it('should emit confirm and cancel event', async () => {
    const wrapper = mount(Dialog, {
      props: { modelValue: true }
    })
    await nextTick()

    const confirmBtn = document.querySelector('.dialog-btn.confirm') as HTMLElement
    const cancelBtn = document.querySelector('.dialog-btn.cancel') as HTMLElement

    confirmBtn.click()
    cancelBtn.click()
    await nextTick()

    expect(wrapper.emitted().confirm).toBeTruthy()
    expect(wrapper.emitted().cancel).toBeTruthy()
  })

  // ✅ 5️⃣ ESC 键关闭
  it('should close when pressing ESC', async () => {
    const wrapper = mount(Dialog, {
      props: { modelValue: true, closeOnPressEscape: true }
    })
    await nextTick()

    const escEvent = new KeyboardEvent('keydown', { key: 'Escape' })
    document.dispatchEvent(escEvent)
    await nextTick()

    expect(wrapper.emitted()['update:modelValue']?.[0]).toEqual([false])
  })

  // ✅ 6️⃣ 禁止 ESC 关闭
  it('should not close when closeOnPressEscape is false', async () => {
    const wrapper = mount(Dialog, {
      props: { modelValue: true, closeOnPressEscape: false }
    })
    await nextTick()

    const escEvent = new KeyboardEvent('keydown', { key: 'Escape' })
    document.dispatchEvent(escEvent)
    await nextTick()

    expect(wrapper.emitted()['update:modelValue']).toBeUndefined()
  })

  // ✅ 7️⃣ 测试 beforeClose 钩子（异步关闭）
  it('should call beforeClose before closing', async () => {
    const beforeClose = vi.fn((done) => {
      setTimeout(() => done(), 100)
    })

    const wrapper = mount(Dialog, {
      props: { modelValue: true, beforeClose }
    })
    await nextTick()

    const closeBtn = document.querySelector('.dialog-close') as HTMLElement
    closeBtn.click()

    expect(beforeClose).toHaveBeenCalled()
  })

  it('should restore scroll after close', async () => {
    const wrapper = mount(Dialog, {
      props: { modelValue: true, lockScroll: true }
    })
    await nextTick()

    wrapper.setProps({ modelValue: false })
    await nextTick()
    expect(document.body.style.overflow).toBe('')
  })
})

import { createDialog } from '../src/index'

describe('createDialog (function call)', () => {
  // ✅ 1️⃣ 基础调用与渲染
  it('should render dialog to body when called', async () => {
    createDialog({ title: '测试弹窗', content: 'Hello world' })
    await nextTick()

    const overlay = document.querySelector('.dialog-overlay')
    const title = document.querySelector('.dialog-title')

    expect(overlay).toBeTruthy()
    expect(title?.textContent).toContain('测试弹窗')
  })

  // ✅ 2️⃣ 点击确认按钮触发 resolve
  it('should resolve promise on confirm click', async () => {
    const promise = createDialog({ title: '确认测试' })
    await nextTick()

    const confirmBtn = document.querySelector('.dialog-btn.confirm') as HTMLElement
    confirmBtn.click()

    const result = await promise
    expect(result).toBe(true)
  })

  // ✅ 3️⃣ 点击取消按钮触发 reject
  it('should reject promise on cancel click', async () => {
    const promise = createDialog({ title: '取消测试' })
    await nextTick()

    const cancelBtn = document.querySelector('.dialog-btn.cancel') as HTMLElement
    cancelBtn.click()

    await expect(promise).rejects.toBe(false)
  })

  // ✅ 4️⃣ 弹窗关闭后 DOM 自动卸载
  it('should remove dialog from DOM after close', async () => {
    const promise = createDialog({ title: '卸载测试' })
    await nextTick()

    const container = document.querySelector('.dialog-overlay')?.parentElement
    expect(container).toBeTruthy()

    // 触发关闭
    const confirmBtn = document.querySelector('.dialog-btn.confirm') as HTMLElement
    confirmBtn.click()
    await nextTick()

    // 等待 Promise 完成后检查清理
    await promise
    await nextTick()

    const overlay = document.querySelector('.dialog-overlay')
    expect(overlay).toBeNull()
  })

  // ✅ 5️⃣ 多次调用不会相互干扰
  it('should support multiple dialogs independently', async () => {
    const p1 = createDialog({ title: '第一个' })
    const p2 = createDialog({ title: '第二个' })
    await nextTick()

    const dialogs = document.querySelectorAll('.dialog-overlay')
    expect(dialogs.length).toBe(2)

    const firstConfirm = dialogs[0].querySelector('.dialog-btn.confirm') as HTMLElement
    const secondCancel = dialogs[1].querySelector('.dialog-btn.cancel') as HTMLElement

    firstConfirm.click()
    secondCancel.click()

    const res1 = await p1
    await expect(p2).rejects.toBe(false)
    expect(res1).toBe(true)
  })
})
