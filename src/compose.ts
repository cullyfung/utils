export const compose =
  (...args: Function[]) =>
  (x: any) =>
    args.reduceRight((pre, cur) => cur(pre), x)
