type Mods = Record<string, boolean | string>;

export function classNames(
  classes: string,
  mods?: Mods,
  additionalClasses?: string[]
): string {
  return [
    classes,
    ...additionalClasses,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
}
