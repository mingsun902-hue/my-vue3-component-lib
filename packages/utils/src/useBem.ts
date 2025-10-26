const namespace = 'xx'

export function useBem(block: string) {
  const b = () => `${namespace}-${block}`
  const e = (element?: string) =>
    element ? `${namespace}-${block}__${element}` : ''
  const m = (modify?: string) =>
    modify ? `${namespace}-${block}--${modify}` : ''
  const em = (element?: string, modify?: string) =>
    element && modify ? `${namespace}-${block}__${element}--${modify}` : ''

  const is = (state: string, active = true) => (active ? `is-${state}` : '')
  return { b, e, m, em, is }
}
