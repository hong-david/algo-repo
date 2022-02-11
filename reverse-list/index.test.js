const { reverseList } = require('./')
const { makeList, gatherNodes } = require('../linked-list/')

const l1 = makeList([1, 2, 3])
test('reverseList', () => {
  const head = reverseList(l1)
  expect(gatherNodes(head)).toEqual([3, 2, 1])
})