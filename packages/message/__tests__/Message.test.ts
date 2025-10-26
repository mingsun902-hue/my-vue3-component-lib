/**
 * Message 组件单元测试
 * 测试点：
 * 1. 动态创建与渲染
 * 2. 自动销毁
 * 3. 多条堆叠偏移
 * 4. onClose 回调
 * 5. Promise 异步更新
 * 6. 类型渲染与 class 检查
 */

import { describe, it, expect, vi, afterEach } from 'vitest'
import { nextTick } from 'vue'
import { createMessage } from '../src/createMessage'

// 每次测试后清空 DOM，防止污染
afterEach(() => {
  document.body.innerHTML = ''
})

describe('Message Component', () => {
  it('基础渲染测试', async () => {
    createMessage({ message: 'Hello Message' })
    await nextTick()

    const el = document.querySelector('.message')!
    expect(el).toBeTruthy()
    expect(el.textContent).toContain('Hello Message')
  })

  it('自动销毁逻辑', async () => {
    vi.useFakeTimers()
    createMessage({ message: 'Auto close', duration: 1000 })

    vi.advanceTimersByTime(1500)
    await nextTick()

    const el = document.querySelector('.message')
    expect(el).toBeNull()
    vi.useRealTimers()
  })

  it('多条消息堆叠', async () => {
    createMessage({ message: 'Msg 1' })
    createMessage({ message: 'Msg 2' })
    await nextTick()

    const messages = Array.from(document.querySelectorAll('.message')) as HTMLElement[]
    expect(messages.length).toBe(2)

    const top1 = parseInt(messages[0].style.top)
    const top2 = parseInt(messages[1].style.top)
    expect(top2).toBeGreaterThan(top1)
  })

  it('自定义关闭回调', async () => {
    const onClose = vi.fn()

    vi.useFakeTimers()
    createMessage({ message: 'Close me', duration: 500, onClose })

    vi.advanceTimersByTime(1000)
    await nextTick()

    expect(onClose).toHaveBeenCalled()
    vi.useRealTimers()
  })

  it(' Promise 异步更新', async () => {
    vi.useFakeTimers()
    createMessage({ 
      message: 'Loading', 
      type: 'loading', 
      promise: new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            message: 'Updated',
            type: 'success',
          })
        }, 1000)
      }),
    })

    // 模拟异步 Promise 完成
    vi.advanceTimersByTime(1000)
    await Promise.resolve()  // ✅ 等待 Promise.then 执行
    await nextTick()

    const el = document.querySelector('.message')!
    expect(el.textContent).toContain('Updated')
    expect(el.className).toContain('success')

    vi.useRealTimers()
  })

  it('类型样式验证', async () => {
    createMessage({ message: 'Success', type: 'success' })
    await nextTick()

    const el = document.querySelector('.message')!
    expect(el.classList.contains('success')).toBe(true)
  })
})
