export function styleObjToStr(styleObj: Record<string, string | number>): string {
  return Object.entries(styleObj)
    .map(([k, v]) => `${k}: ${v};`)
    .join(" ")
}
