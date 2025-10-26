// src/index.ts
// import './style.css'
import Button from "@my-org/button/"
import Input from '@my-org/input'
import Message from '@my-org/message'
import { Dialog, CreateDialog } from '@my-org/dialog'
const components = [Button, Input, Dialog]

export default {install(app: any) {
    components.forEach(c => app.component(c.name, c))
  }
}

// 也保留按需导出
export { Button, Input, Message, Dialog, CreateDialog }