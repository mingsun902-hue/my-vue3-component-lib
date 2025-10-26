export function buildProps<T extends Record<string, any>>(props: T): T {
  for (const key in props) {
    const prop = props[key]
    if (prop.values) {
      prop.validator = (value: unknown) => {
        const valid = prop.values.includes(value)
        if (!valid) {
          console.warn(`'${value}' is not in ['${prop.values.join("','")}']`)
        }
        return valid
      }
    }
  }
  return props
}
