import Message from "./Message.vue";
import type { MessageOptions } from "./types";
import { createVNode, render, VNode } from "vue";

const instances: VNode[] = []

export function createMessage(options: MessageOptions) {
  // 1.创建一个容器
  const container = document.createElement('div')
  document.body.appendChild(container)

  const onClose = () => {
    render(null, container)
    document.body.removeChild(container)
    instances.splice(instances.indexOf(vnode), 1);
    updateOffsets();
    options.onClose?.()
  }
  // 2.创建虚拟节点
  const vnode = createVNode(Message, {
    ...options,
    onClose
  })
  // 3.渲染到真是demo
  render(vnode, container)
  instances.push(vnode)

  updateOffsets()

  if (options.promise) {
    options.promise.then((newOpts) => {
      Object.assign(vnode.component.props!, newOpts);
    });
  }
}

function updateOffsets() {
  let offset = 20
  instances.forEach((vm) => {
    vm.component?.exposed?.setOffset(offset);
    // + 10间距
    offset += (vm.component?.exposed?.height.value || 0) + 10
  })
}