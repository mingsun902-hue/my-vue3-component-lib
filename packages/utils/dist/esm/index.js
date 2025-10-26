function o(s) {
  return { b: () => `xx-${s}`, e: (n) => n ? `xx-${s}__${n}` : "", m: (n) => n ? `xx-${s}--${n}` : "", em: (n, a) => n && a ? `xx-${s}__${n}--${a}` : "", is: (n, a = !0) => a ? `is-${n}` : "" };
}
function r(s) {
  for (const $ in s) {
    const e = s[$];
    e.values && (e.validator = (t) => {
      const c = e.values.includes(t);
      return c || console.warn(`'${t}' is not in ['${e.values.join("','")}']`), c;
    });
  }
  return s;
}
export {
  r as buildProps,
  o as useBem
};
