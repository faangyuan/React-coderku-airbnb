export function isEmptyObject(obj) {
  // !! 转换为布尔值
  return !! Object.keys(obj).length
}