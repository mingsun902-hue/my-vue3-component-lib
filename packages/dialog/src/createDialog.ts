// createDialog.ts
import { createVNode, render } from 'vue'
import Dialog from './Dialog.vue'

export function createDialog(options) {
  const container = document.createElement('div')
  document.body.appendChild(container)

  return new Promise((resolve, reject) => {
    const vnode = createVNode(Dialog, {
      ...options,
      modelValue: true,
      onConfirm: () => { resolve(true); cleanup() },
      onCancel: () => { reject(false); cleanup() },
      'onUpdate:modelValue': (val: boolean) => {
        if (!val) cleanup()
      }
    })

    function cleanup() {
      render(null, container)
      container.remove()
    }

    render(vnode, container)
  })
}
