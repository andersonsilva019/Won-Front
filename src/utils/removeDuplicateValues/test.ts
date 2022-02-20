import { removeDuplicateValues } from '.'

const arr = [1, 2, 2, 3, 4, 1, 5]

describe('removeDuplicateValues()', () => {
  it('should remove duplicate values of the array', () => {
    const newArray = removeDuplicateValues(arr)
    expect(newArray).toStrictEqual([1, 2, 3, 4, 5])
  })
})
