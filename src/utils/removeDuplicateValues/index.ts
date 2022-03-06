// eslint disable @typescript-eslint/no-explicit-any
export const removeDuplicateValues = (arr: any[]) => {
  return [...new Set(arr)]
}
