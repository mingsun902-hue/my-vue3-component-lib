function $(o) {
  return { b: () => `xx-${o}`, e: (e) => e ? `xx-${o}__${e}` : "", m: (e) => e ? `xx-${o}--${e}` : "", em: (e, n) => e && n ? `xx-${o}__${e}--${n}` : "", is: (e, n = !0) => n ? `is-${e}` : "" };
}
function i(o) {
  for (const e in o) {
    const n = o[e];
    n.values && (n.validator = (r) => {
      const u = n.values.includes(r);
      return u || console.warn(`'${r}' is not in ['${n.values.join("','")}']`), u;
    });
  }
  return o;
}
export {
  i as buildProps,
  $ as useBem
};
